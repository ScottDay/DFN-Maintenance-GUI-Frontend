import { action, observable, reaction } from 'mobx';


class SessionStore {
	@observable hostname;
	@observable token;

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

	@action
	setHostname(hostname) {
		this.hostname = hostname;
	}

	@action
	setToken(token) {
		this.token = token;
	}

	@action
	reset() {
		this.hostname = '';
		this.token = null;
	}
}


export default new SessionStore();
