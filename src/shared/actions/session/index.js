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

function authenticate() {
	apiService.Session
		.check(sessionStore.token)
		.then((token) => sessionStore.setToken(token))
		.catch((error) => {
			// TODO: Catch other error status codes.
			if (error.status === 0) {
				logout();
			}
		});
}


export {
	fetchHostname,
	logout,
	authenticate
}
