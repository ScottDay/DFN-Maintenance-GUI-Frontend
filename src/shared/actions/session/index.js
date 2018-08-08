import browserHistory from 'react-router-dom';

import { api } from 'services';
import { sessionStore } from 'stores';


function fetchHostname() {
	api.Session
		.hostname()
		.then((hostname) => sessionStore.setHostname(hostname));
}

function logout() {
	sessionStore.reset();
	browserHistory.push('/login');
}

function authenticate() {
	api.Session
		.check(sessionStore.token)
		.then((token) => sessionStore.setToken(token));
}


export {
	fetchHostname,
	logout,
	authenticate
}
