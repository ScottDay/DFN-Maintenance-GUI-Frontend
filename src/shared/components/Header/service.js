import { sessionAction } from 'actions';

import store from './store';


// eslint-disable-next-line import/prefer-default-export
export function logout() {
	store.setIsOpen(false);
	sessionAction.logout();
}
