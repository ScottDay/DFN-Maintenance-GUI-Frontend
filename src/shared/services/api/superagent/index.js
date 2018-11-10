import superagentPromise from 'superagent-promise';
import superagentDefaults from 'superagent-defaults';
import _superagent from 'superagent';

import { inputPlugin, outputPlugin, errorPlugin } from './plugins';


const rootUrl = `http://${window.location.hostname}:5000`;
const superagent = superagentDefaults(superagentPromise(_superagent, global.Promise));

superagent
	.set('Access-Control-Allow-Origin', '*')
	.set('Access-Control-Allow-Headers', 'Accept, Content-Type, Authorization')
	.set('Access-Control-Allow-Methods', 'GET, POST, PUT')
	.set('Access-Control-Allow-Credentials', 'true')
	.set('Accept', 'application/json');


export function get(url) {
	return superagent
		.get(`${rootUrl}${url}`)
		.use((request) => inputPlugin(request, url))
		.then((result) => outputPlugin(result, url))
		.catch((error) => errorPlugin(error));
}

export function post(url, body) {
	return superagent
		.post(`${rootUrl}${url}`)
		.use((request) => inputPlugin(request, url))
		.send(body)
		.then((result) => outputPlugin(result, url))
		.catch((error) => errorPlugin(error));
}

export function put(url, body) {
	return superagent
		.put(`${rootUrl}${url}`)
		.use((request) => inputPlugin(request, url))
		.send(body)
		.then((result) => outputPlugin(result, url))
		.catch((error) => errorPlugin(error));
}
