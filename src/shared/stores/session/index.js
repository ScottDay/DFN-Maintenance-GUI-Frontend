import { action, observable, reaction } from 'mobx';


class SessionStore {
	@observable hostname = '';
	@observable authenticated = false;
	@observable access_token = null;
	@observable refresh_token = window.localStorage.getItem('dfn_refresh_token');
	@observable expires_in = 0;

	constructor() {
		reaction(
			() => this.refresh_token,
			(token) => {
				if (token) {
					window.localStorage.setItem('dfn_refresh_token', token);
				} else {
					window.localStorage.removeItem('dfn_refresh_token');
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
		this.access_token = token.access_token;
		this.refresh_token = token.refresh_token;
		this.expires_in = token.expires_in;
	}

	@action.bound
	setAuthenticated(authenticated) {
		this.authenticated = authenticated;
	}

	@action.bound
	reset() {
		this.hostname = '';
		this.authenticated = false;
		this.access_token = null;
		this.refresh_token = null;
		this.expires_in = 0;
	}
}


export default new SessionStore();
