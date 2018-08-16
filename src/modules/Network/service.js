import { apiService } from 'services';
import { notificationStore, requestStore } from 'stores';
import { notificationTypes, endpoints } from 'constants';


function checkInternet(store) {
	apiService.network
		.checkInternet()
		.then((body) => {
			store.setSummary(`IP Address: ${body.ip}`);
			store.setMessage(body.output);
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.internet.check, false));
}

function restartInternet(store) {
	apiService.network
		.restartInternet()
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

function checkVPN(store) {
	apiService.network
		.checkVPN()
		.then((body) => {
			store.setSummary(`VPN IP Address: ${body.ip}`);
			store.setMessage(body.output);
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.vpn.check, false));
}

function restartVPN(store) {
	apiService.network
		.restartVPN()
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


export {
	checkInternet,
	restartInternet,
	checkVPN,
	restartVPN
}
