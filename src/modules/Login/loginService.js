import loginStore from './loginStore';

import { api } from '../../shared/services';
import { sessionStore } from '../../shared/stores';


function login(username, password) {
	api.Session
		.generate(username, password)
		.then((token) => {
			loginStore.reset();
			sessionStore.setToken(token);
		});
}


export default {
	login
}
