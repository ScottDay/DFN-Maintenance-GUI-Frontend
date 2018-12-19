import React from 'react';

import RefreshIcon from '@material-ui/icons/Refresh';
import Button from "@material-ui/core/Button/Button";

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

	if (request.method === 'POST' || request.method === 'PUT') {
		request.set('Content-Type', 'application/json');
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
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					duration: 10000,
					message: "Endpoint requires authentication, logout to re-authenticate."
				},
				renderClose: true,
				action: [
					<Button
						key='logout'
						size='small'
						color='primary'
						onClick={() => sessionAction.logout()}
					>
						Logout
					</Button>
				]
			});

			break;
		// Error while executing a backend command.
		case 500:
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					message: error.response.body.error.msg
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
