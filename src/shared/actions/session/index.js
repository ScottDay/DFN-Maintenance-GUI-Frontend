import { apiService, historyService } from 'services';
import { sessionStore, notificationStore } from 'stores';


// TODO: Catch error status codes
function fetchHostname() {
	apiService.Session
		.hostname()
		.then((hostname) => sessionStore.setHostname(hostname))
		.catch(() => {});
}

function logout() {
	sessionStore.reset();
	notificationStore.reset();
	historyService.push('/login');
}

// TODO: Catch error status codes
function authenticate() {
	apiService.Session
		.check(sessionStore.token)
		.then((token) => sessionStore.setToken(token))
		.catch(() => {});
}


export {
	fetchHostname,
	logout,
	authenticate
}
