import { apiService, historyService } from 'services';
import { sessionStore, notificationStore } from 'stores';


function fetchHostname() {
	apiService.Session
		.hostname()
		.then((hostname) => sessionStore.setHostname(hostname));
}

function logout() {
	sessionStore.reset();
	notificationStore.reset();
	historyService.push('/login');
}

function authenticate() {
	apiService.Session
		.check(sessionStore.token)
		.then((token) => sessionStore.setToken(token));
}


export {
	fetchHostname,
	logout,
	authenticate
}
