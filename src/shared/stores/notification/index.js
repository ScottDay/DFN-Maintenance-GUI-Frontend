import { action, computed, observable } from 'mobx';

import { notificationTypes } from 'constants';


class NotificationStore {
	@observable notifications;

	constructor() {
		this.notifications = observable([]);
	}

	@action
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

	@action
	nextNotification() {
		return this.notifications.shift();
	}

	@computed
	get hasNotificationToShow() {
		return this.notifications.length > 0 ? true : false;
	}
}

export default new NotificationStore();
