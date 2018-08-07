import superagentPromise from 'superagent-promise';
import superagentDefaults from 'superagent-defaults';
import _superagent from 'superagent';

import { sessionStore } from '../../stores';
import { sessionAction } from '../../actions';


// API middleware.

const API_ROOT = ':5000/api';
const superagent = superagentDefaults(superagentPromise(_superagent, global.Promise));

superagent
	.set('Access-Control-Allow-Origin', '*')
	.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
	.set('Access-Control-Allow-Credentials', 'true')
	.set('Content-Type', 'application/json;charset=UTF-8');


const tokenPlugin = (request) => {
	if (sessionStore.token) {
		request.set('authorization', `Token ${sessionStore.token}`);
	}
};

const handleErrors = (error) => {
	if (error && error.response && error.response.status === 401) {
		sessionAction.logout();
	}

	return error;
};

const responseBody = (result) => result.body;

const api = {
	get: (url) =>
		superagent
			.get(`${API_ROOT}${url}`)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody),
	post: (url, body) =>
		superagent
			.post(`${API_ROOT}${url}`, body)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody),
	put: (url, body) =>
		superagent
			.put(`${API_ROOT}${url}`, body)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody),
	del: (url) =>
		superagent
			.del(`${API_ROOT}${url}`)
			.use(tokenPlugin)
			.end(handleErrors)
			.then(responseBody)
};

// API endpoints.

const Session = {
	check: (token) =>
		api.post('/token/check', token),
	generate: (username, password) =>
		api.post('/token/generate', { username, password }),
	hostname: () =>
		api.get('/hostname')
}


export default {
	Session
}
