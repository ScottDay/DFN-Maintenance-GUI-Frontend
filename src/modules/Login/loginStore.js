import { action, computed, observable } from 'mobx';


class LoginStore {
	@observable username;
	@observable password;

	constructor() {
		this.username = '';
		this.password = '';
	}

	@action
	setUsername(username) {
		this.username = username
	}

	@action
	setPassword(password) {
		this.password = password
	}

	@action
	reset() {
		this.username = '';
		this.password = '';
	}

	@computed
	get isDisabled() {
		let disabled = false;

		if (this.username.length > 0 && this.password.length > 0) {
			disabled = true;
		}

		return disabled;
	}
}


export default new LoginStore();
