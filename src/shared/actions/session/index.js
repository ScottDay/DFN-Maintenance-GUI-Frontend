import { apiService, historyService } from 'services';
import { sessionStore, notificationStore, requestStore } from 'stores';
import { endpoints } from 'constants';


export function hostname() {
	apiService.session
		.hostname()
		.then((body) => sessionStore.setHostname(body.hostname))
		.finally(() => requestStore.setRequestInProgress(endpoints.session.hostname, false));
}

export function logout() {
	// eslint-disable-next-line
	console.log('logout');

	sessionStore.reset();
	notificationStore.reset();
	historyService.push('/login');
}

export function refresh() {
	if (sessionStore.hasRefreshToken) {
		// eslint-disable-next-line
		console.log('refresh');

		apiService.session
			.refresh()
			.then((body) => {
				sessionStore.setAccessToken(body.access_token, body.expires_in);
				sessionStore.setAuthenticated(true);
			})
			.catch(() => logout())
			.finally(() => requestStore.setRequestInProgress(endpoints.session.refresh, false));
	}
}

export function check() {
	if (sessionStore.hasAccessToken && !requestStore.getRequestByType(endpoints.session.check)) {
		// eslint-disable-next-line
		console.log('check');

		apiService.session
			.check()
			.then(() => sessionStore.setAuthenticated(true))
			.catch(() => logout())
			.finally(() => requestStore.setRequestInProgress(endpoints.session.check, false));
	} else if (sessionStore.hasRefreshToken) {
		refresh();
	} else {
		logout();
	}
}
