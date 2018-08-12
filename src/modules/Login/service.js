import { api } from 'services';
import { sessionStore } from 'stores';

import store from './store';


function login(username, password) {
	api.Session
		.generate(username, password)
		.then((token) => {
			store.reset();
			sessionStore.setToken(token);
		});
}


export {
	// eslint-disable-next-line import/prefer-default-export
	login
}
