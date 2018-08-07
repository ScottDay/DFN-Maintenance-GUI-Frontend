import { action, observable, reaction } from 'mobx';


class SessionStore {
	@observable hostname;
	@observable token;
	@observable authenticated;

	constructor() {
		this.hostname = 'test-host';
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

	@action
	setHostname(hostname) {
		this.hostname = hostname;
	}

	@action
	setToken(token) {
		this.token = token;
	}

	@action
	setAuthenticated(authenticated) {
		this.authenticated = authenticated;
	}

	@action
	reset() {
		this.hostname = '';
		this.token = null;
		this.authenticated = false;
	}
}


export default new SessionStore();
