import { action, computed, observable } from 'mobx';

import { notificationTypes } from 'constants';


class NotificationStore {
	@observable notifications;

	constructor() {
		this.notifications = observable([]);
	}

	@action.bound
	addNotification(notification = {
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
	}) {

		this.notifications.push(notification);
	}

	@action.bound
	nextNotification() {
		return this.notifications.shift();
	}

	@action.bound
	reset() {
		this.notifications.length = 0;
	}

	@computed
	get hasNotificationToShow() {
		return this.notifications.length > 0 ? true : false;
	}
}

export default new NotificationStore();
