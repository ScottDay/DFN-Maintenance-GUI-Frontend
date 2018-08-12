import React from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';

import { notificationStore } from 'stores';

import Presenter from './presenter';
import store from './store';


@observer
export default class Snackbar extends React.Component {
	componentDidMount() {
		// Consumer of notifications
		this.disposer = autorun(() => {
			// TODO: Implement overlapping notifications (remove existing and favour of new).
			// TODO: Might need to add an id to each notification is comparison is needed.
			// Only show notification if we are not currently showing a notification.
			if (notificationStore.hasNotificationToShow && !store.isOpen) {
				const notification = notificationStore.nextNotification();

				store.open(notification);
			}
		});
	}

	componentWillUnmount() {
		this.disposer();
	}

	render() {
		return (
			<Presenter
				isOpen={store.isOpen}
				content={store.notification.content}
				anchorOrigin={store.notification.anchorOrigin}
				renderClose={store.notification.renderClose}
				action={store.notification.action}
				onClose={store.close}
			/>
		);
	}
}
