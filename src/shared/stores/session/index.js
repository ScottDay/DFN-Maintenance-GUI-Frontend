import { action, computed, observable, reaction } from 'mobx';

import { sessionAction } from 'actions';


class SessionStore {
	@observable hostname = '';
	@observable authenticated = false;
	@observable access_token = null;
	@observable refresh_token = window.localStorage.getItem('dfn_refresh_token');
	@observable expires_in = 0;
	@observable dispose = null;

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
		);
	}

	@action.bound
	setHostname(hostname) {
		this.hostname = hostname;
	}

	@action.bound
	setRefreshToken(refresh_token) {
		this.refresh_token = refresh_token;
	}

	@action.bound
	setAccessToken(access_token, expires_in) {
		// eslint-disable-next-line
		console.log('setAccessToken');

		if (this.dispose) {
			// eslint-disable-next-line
			console.log('dispose');

			this.dispose();
		}

		this.expires_in = expires_in * 1000;

		// TODO: Reaction does not always run.
		// TODO: After done testing, set delay to this.expires_in
		this.dispose = reaction(
			() => this.access_token,
			(token) => {
				// eslint-disable-next-line
				console.log('Access Token Reaction');
				sessionAction.refresh(token)
			},
			{ delay: 5000 }
		);

		this.access_token = access_token;
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

	@computed
	get hasAccessToken() {
		return !!this.access_token;
	}

	@computed
	get hasRefreshToken() {
		return !!this.refresh_token;
	}
}


export default new SessionStore();
