import { sessionAction } from 'actions';

import store from './store';


function logout() {
	store.setIsOpen(false);
	sessionAction.logout();
}


export {
	// eslint-disable-next-line import/prefer-default-export
	logout
}
