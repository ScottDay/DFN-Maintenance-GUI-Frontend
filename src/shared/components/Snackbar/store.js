import { action, observable } from 'mobx';

import { notificationTypes } from 'constants';


class Store {
	@observable isOpen = false;
	@observable notification = {
		content: {
			type: notificationTypes.INFO,
			duration: 6000,
			message: ''
		},
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'center'
		},
		renderClose: true,
		action: null
	};

	@action.bound
	open(notification) {
		this.isOpen = true;
		this.notification = notification;
	}

	@action.bound
	close() {
		this.isOpen = false;
	}
}


export default new Store();
