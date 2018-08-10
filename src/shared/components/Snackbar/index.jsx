import React from 'react';
import { autorun, observer } from 'mobx-react';

import { notificationStore } from 'stores';

import Presenter from './presenter';
import store from './store';


@observer
export default class Snackbar extends React.Component {
	componentDidMount() {
		// Consumer of notifications
		this.disposer = autorun(() => {
			const { hasNotificationToShow, nextNotification } = notificationStore;
			const { currentNotification } = store;

			if (hasNotificationToShow()) {
				const notification = nextNotification();

				if(currentNotification != null &&
					notification.message === currentNotification.message &&
					new Date().getTime() - (currentNotification.processedAt || 0) < 5000) {
					return;
				}

				notification.processedAt = new Date().getTime();

				store.setNotification(notification);
			}
		});
	}

	componentWillUnmount() {
		this.disposer();
	}

	handleClose() {
		store.reset();
	}

	render() {
		const { open, notification } = store;

		return (
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				open={open}
				autoHideDuration={6000}
				onClose={this.handleClose}
			>
				{notification ?
					<Presenter
						type={notification.type}
						message={notification.message}
						onClose={this.handleClose}
					/>
					: null
				}
			</Snackbar>
		);
	}
}
