import { apiService } from 'services';
import { requestStore, notificationStore } from 'stores';
import { endpoints, notificationTypes } from 'constants';


export function shutdown() {
	apiService.power
		.shutdown()
		.then(() => {
			notificationStore.addNotification({
				content: {
					type: notificationTypes.SUCCESS,
					duration: 4000,
					message: "Server is shutting down"
				}
			});
		})
		.catch(() => {
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					message: "Error while shutting down the server"
				},
				renderClose: true
			});
		})
		.finally(() => requestStore.setRequestInProgress(endpoints.power.shutdown, false));
}

export function restart() {
	apiService.power
		.restart()
		.then(() => {
			notificationStore.addNotification({
				content: {
					type: notificationTypes.SUCCESS,
					duration: 4000,
					message: "Server is restarting, may take a couple minutes"
				}
			});
		})
		.catch(() => {
			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					message: "Error while restarting the server"
				},
				renderClose: true
			});
		})
		.finally(() => requestStore.setRequestInProgress(endpoints.power.restart, false));
}
