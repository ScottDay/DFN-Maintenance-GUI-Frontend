import { action, computed, observable } from 'mobx';

import { notificationTypes } from 'constants';


class NotificationStore {
	@observable notifications;

	constructor() {
		this.notifications = observable([]);
	}

	@action
	addNotification(type = notificationTypes.INFO, message = '') {
		const notification = {
			type,
			message
		};

		this.notifications.push(notification);
	}

	@computed
	get nextNotification() {
		const notification = this.notificationStore.notifications[0];

		this.notificationStore.notifications.splice(0, 1);

		return notification;
	}

	@computed
	get hasNotificationToShow() {
		return this.notifications.length > 0 ? true : false;
	}
}

export default new NotificationStore();
