import { apiService } from 'services';
import { sessionStore } from 'stores';

import store from './store';


// TODO: Catch error status codes
function login(username, password) {
	apiService.Session
		.generate(username, password)
		.then((token) => {
			store.reset();
			sessionStore.setToken(token);
		})
		.catch(() => {});
}


export {
	// eslint-disable-next-line import/prefer-default-export
	login
}
