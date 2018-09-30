import { apiService } from 'services';
import { notificationStore, requestStore } from 'stores';
import { notificationTypes, endpoints } from 'constants';


export function checkInternet(store) {
	apiService.network.internet
		.check()
		.then((body) => {
			store.setSummary(`IP Address: ${body.ip}`);
			store.setLog(body.output);
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.internet.check, false));
}

export function restartInternet(store) {
	apiService.network.internet
		.restart()
		.then((body) => {
			store.setMessage(body.output);

			notificationStore.addNotification({
				content: {
					type: notificationTypes.SUCCESS,
					message: 'Successfully restarted the network interface!'
				}
			});
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.internet.restart, false));
}

export function checkVPN(store) {
	apiService.network.vpn
		.check()
		.then((body) => {
			store.setSummary(`VPN IP Address: ${body.ip}`);
			store.setMessage(body.output);
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.vpn.check, false));
}

export function restartVPN(store) {
	apiService.network.vpn
		.restart()
		.then((body) => {
			store.setMessage(body.output);

			notificationStore.addNotification({
				content: {
					type: notificationTypes.SUCCESS,
					message: 'Successfully restarted the VPN daemon!'
				}
			});
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.vpn.restart, false));
}
