import superagentPromise from 'superagent-promise';
import superagentDefaults from 'superagent-defaults';
import _superagent from 'superagent';

import { sessionStore, requestStore } from '../../stores';
import { sessionAction } from '../../actions';
import { requestTypes } from '../../constants';


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

	if (result && result.response && result.response.status === 401) {
		sessionAction.logout();
	}

	if ('production' !== process.env.NODE_ENV && result.response.status) {
		// eslint-disable-next-line no-console
		console.log(`${requestType}: ${result.response.status}`);
	}

	return result;
};

const responseBody = (result) => result.body;

const api = {
	get: (url, requestType) =>
		superagent
			.get(`${API_ROOT}${url}`)
			.use((request) => inputPlugins(request, requestType))
			.end((result) => outputPlugins(result, requestType))
			.then(responseBody),
	post: (url, body, requestType) =>
		superagent
			.post(`${API_ROOT}${url}`, body)
			.use((request) => inputPlugins(request, requestType))
			.end((result) => outputPlugins(result, requestType))
			.then(responseBody),
	put: (url, body, requestType) =>
		superagent
			.put(`${API_ROOT}${url}`, body)
			.use((request) => inputPlugins(request, requestType))
			.end((result) => outputPlugins(result, requestType))
			.then(responseBody),
	del: (url, requestType) =>
		superagent
			.del(`${API_ROOT}${url}`)
			.use((request) => inputPlugins(request, requestType))
			.end((result) => outputPlugins(result, requestType))
			.then(responseBody)
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
