import { apiService, historyService } from 'services';
import { sessionStore, notificationStore, requestStore } from 'stores';
import { endpoints } from 'constants';


// TODO: Catch error status codes
function hostname() {
	apiService.session
		.hostname()
		.then((body) => sessionStore.setHostname(body.hostname))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.session.hostname, false));
}

function logout() {
	sessionStore.reset();
	notificationStore.reset();
	historyService.push('/login');
}

function check() {
	apiService.session
		.check()
		.then(() => sessionStore.setAuthenticated(true))
		.catch((error) => {
			// TODO: Catch other error status codes.
			if (error.status === 0) {
				logout();
			}
		})
		.finally(() => requestStore.setRequestInProgress(endpoints.session.check, false));
}


export {
	hostname,
	logout,
	check
}
