import React from 'react';
import superagentPromise from 'superagent-promise';
import superagentDefaults from 'superagent-defaults';
import _superagent from 'superagent';

import RefreshIcon from '@material-ui/icons/Refresh';

import { sessionAction } from 'actions';
import { sessionStore, requestStore, notificationStore } from 'stores';
import { requestTypes, notificationTypes } from 'constants';
import { IconButtonWrapper } from 'components';


// API middleware.

const API_ROOT = `http://${window.location.hostname}:5000/api`;
const superagent = superagentDefaults(superagentPromise(_superagent, global.Promise));

superagent
	.set('Access-Control-Allow-Origin', '*')
	.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
	.set('Access-Control-Allow-Credentials', 'true')
	.set('Content-Type', 'application/json;charset=UTF-8');


const inputPlugins = (request, requestType) => {
	requestStore.setRequestInProgress(requestType, true);

	if (sessionStore.token) {
		request.set('authorization', `Token ${sessionStore.token}`);
	}
};

const outputPlugins = (result, requestType) => {
	requestStore.setRequestInProgress(requestType, false);

	if ('production' !== process.env.NODE_ENV
		&& result
		&& result.response
		&& result.response.status) {
		// eslint-disable-next-line no-console
		console.log(`DEBUG: ${requestType}: ${result.response.status}`);
	}

	return result.body;
};

const errorPlugins = (error) => {
	// NOTE: Throw an exception if you want the caller to handle an error as well.
	switch (error.status) {
		// Not authorized.
		case 401: sessionAction.logout(); break;
		// Connection error.
		case undefined:
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					duration: 10000,
					message: "Unable to connect to the backend server...\n\n" +
						"Ensure the camera box is on and you're properly connected to it."
				},
				renderClose: true,
				action: [
					<IconButtonWrapper
						key='refresh'
						onClick={() => window.location.reload()}
						icon={RefreshIcon}
					/>
				]
			});

			// Reassign to status code 0 for easier comparisons.
			// eslint-disable-next-line no-param-reassign
			error.status = 0;

			break;
	}

	throw error;
};

const api = {
	get: (url, requestType) =>
		superagent
			.get(`${API_ROOT}${url}`)
			.use((request) => inputPlugins(request, requestType))
			.then((result) => outputPlugins(result, requestType))
			.catch((error) => errorPlugins(error)),
	post: (url, body, requestType) =>
		superagent
			.post(`${API_ROOT}${url}`)
			.use((request) => inputPlugins(request, requestType))
			.send(body)
			.then((result) => outputPlugins(result, requestType))
			.catch((error) => errorPlugins(error)),
	put: (url, body, requestType) =>
		superagent
			.put(`${API_ROOT}${url}`)
			.use((request) => inputPlugins(request, requestType))
			.send(body)
			.then((result) => outputPlugins(result, requestType))
			.catch((error) => errorPlugins(error)),
	del: (url, requestType) =>
		superagent
			.del(`${API_ROOT}${url}`)
			.use((request) => inputPlugins(request, requestType))
			.then((result) => outputPlugins(result, requestType))
			.catch((error) => errorPlugins(error))
};

// API endpoints.

const Session = {
	check: (token) =>
		api.post('/token/check', token, requestTypes.SESSION),
	generate: (username, password) =>
		api.post('/token/generate', { username, password }, requestTypes.SESSION),
	hostname: () =>
		api.get('/hostname', requestTypes.SESSION)
}


export {
	// eslint-disable-next-line
	Session
}
