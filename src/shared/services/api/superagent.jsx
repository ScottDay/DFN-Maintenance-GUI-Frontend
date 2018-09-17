/* eslint-disable no-case-declarations */

import React from 'react';
import superagentPromise from 'superagent-promise';
import superagentDefaults from 'superagent-defaults';
import _superagent from 'superagent';

import RefreshIcon from '@material-ui/icons/Refresh';

import { sessionAction } from 'actions';
import { sessionStore, requestStore, notificationStore } from 'stores';
import { notificationTypes } from 'constants';
import { IconButtonWrapper } from 'components';


const ROOT_URL = `http://${window.location.hostname}:5000`;
const superagent = superagentDefaults(superagentPromise(_superagent, global.Promise));

superagent
	.set('Access-Control-Allow-Origin', '*')
	.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
	.set('Access-Control-Allow-Credentials', 'true')
	.set('Content-Type', 'application/json;charset=UTF-8');

const inputPlugins = (request, url) => {
	requestStore.setRequestInProgress(url, true);

	if (sessionStore.access_token) {
		request.set('Authorization', `Bearer ${sessionStore.access_token}`);
	}
};

const outputPlugins = (result, url) => {
	if (process.env.NODE_ENV === 'development'
		&& result
		&& result.body) {
		// eslint-disable-next-line no-console
		console.log(`DEBUG: ${url}\n\n${JSON.stringify(result.body)}`);
	}

	return result.body;
};

const errorPlugins = (error) => {
	// NOTE: Throw an exception if you want the caller to handle an error as well.
	switch (error.status) {
		// Not authorized.
		case 401:
			// Only auto logout if authentication is enabled.
			if (process.env.auth) {
				sessionAction.logout();
			}

			break;
		// Error while executing a backend command.
		case 500:
			const { cmd, output } = error.response.body;
			let message = output;

			if (cmd !== '') {
				message = `${cmd}\n\n${output}`;
			}

			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					message
				}
			});

			break;

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
	get: (url) =>
		superagent
			.get(`${ROOT_URL}${url}`)
			.use((request) => inputPlugins(request, url))
			.then((result) => outputPlugins(result, url))
			.catch((error) => errorPlugins(error)),
	post: (url, body) =>
		superagent
			.post(`${ROOT_URL}${url}`)
			.use((request) => inputPlugins(request, url))
			.send(body)
			.then((result) => outputPlugins(result, url))
			.catch((error) => errorPlugins(error)),
	put: (url, body) =>
		superagent
			.put(`${ROOT_URL}${url}`)
			.use((request) => inputPlugins(request, url))
			.send(body)
			.then((result) => outputPlugins(result, url))
			.catch((error) => errorPlugins(error)),
	del: (url) =>
		superagent
			.del(`${ROOT_URL}${url}`)
			.use((request) => inputPlugins(request, url))
			.then((result) => outputPlugins(result, url))
			.catch((error) => errorPlugins(error))
};


export default api;

/* eslint-enable no-case-declarations */
