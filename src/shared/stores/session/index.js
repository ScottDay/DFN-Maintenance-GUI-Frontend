import { action, observable, reaction } from 'mobx';


class SessionStore {
	@observable hostname;
	@observable token;
	@observable authenticated;

	constructor() {
		this.hostname = '';
		this.token = window.localStorage.getItem('token');

		reaction(
			() => this.token,
			(token) => {
				if (token) {
					window.localStorage.setItem('token', token);
				} else {
					window.localStorage.removeItem('token');
				}
			}
		)
	}

	@action.bound
	setHostname(hostname) {
		this.hostname = hostname;
	}

	@action.bound
	setToken(token) {
		this.token = token;
	}

	@action.bound
	setAuthenticated(authenticated) {
		this.authenticated = authenticated;
	}

	@action.bound
	reset() {
		this.hostname = '';
		this.token = null;
		this.authenticated = false;
	}
}


export default new SessionStore();
