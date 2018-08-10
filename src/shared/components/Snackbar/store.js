import { action, observable } from 'mobx';


class Store {
	@observable open;
	@observable notification;

	constructor() {
		this.open = false;
		this.notification = null;
	}

	@action
	setNotification(notification) {
		this.open = true;
		this.notification = notification;
	}

	@action
	reset() {
		this.open = false;
		this.notification = null;
	}
}


export default new Store();
