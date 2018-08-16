import { action, computed, observable } from 'mobx';


class Store {
	@observable username;
	@observable password;

	constructor() {
		this.username = '';
		this.password = '';
	}

	@action.bound
	setUsername(username) {
		this.username = username
	}

	@action.bound
	setPassword(password) {
		this.password = password
	}

	@action.bound
	reset() {
		this.username = '';
		this.password = '';
	}

	@computed
	get isDisabled() {
		let disabled = true;

		if (this.username.length > 0 && this.password.length > 0) {
			disabled = false;
		}

		return disabled;
	}
}


export default new Store();
