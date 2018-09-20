import React from 'react';

import RefreshIcon from '@material-ui/icons/Refresh';

import { sessionAction } from 'actions';
import { sessionStore, requestStore, notificationStore } from 'stores';
import { notificationTypes, endpoints } from 'constants';
import { IconButtonWrapper } from 'components';


export const inputPlugin = (request, url) => {
	requestStore.setRequestInProgress(url, true);

	if (url === endpoints.session.refresh) {
		request.set('Authorization', `Bearer ${sessionStore.refresh_token}`);
	} else {
		request.set('Authorization', `Bearer ${sessionStore.access_token}`);
	}
};

export const outputPlugin = (result, url) => {
	if (process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line no-console
		console.log(`DEBUG: ${url}`);
	}

	return result.body;
};

/* eslint-disable no-case-declarations */
export const errorPlugin = (error) => {
	// NOTE: Throw an exception if you want the caller to handle an error as well.
	switch (error.status) {
		// Not authorized.
		case 401:
			// Only auto logout if authentication is enabled.
			if (process.env.auth) {
				sessionAction.logout();
			}

			break;
		// Error while executing a backend command.
		case 500:
			const { cmd, output } = error.response.body;
			let message = output;

			if (cmd !== '') {
				message = `${cmd}\n\n${output}`;
			}

			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					message
				}
			});

			break;

		// Connection error.
		case undefined:
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					duration: 10000,
					message: "Unable to connect to the backend server...\n\n" +
					"Ensure the camera box is on and you're properly connected to it."
				},
				renderClose: true,
				action: [
					<IconButtonWrapper
						key='refresh'
						onClick={() => window.location.reload()}
						icon={RefreshIcon}
					/>
				]
			});

			// Reassign to status code 0 for easier comparisons.
			// eslint-disable-next-line no-param-reassign
			error.status = 0;

			break;
	}

	throw error;
};
/* eslint-enable no-case-declarations */
