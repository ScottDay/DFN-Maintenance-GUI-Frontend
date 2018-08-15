import { apiService } from 'services';
import { notificationStore } from 'stores';
import { notificationTypes } from 'constants';


function checkInternet(store) {
	apiService.network
		.checkInternet()
		.then((body) => {
			store.setSummary(`IP Address: ${body.ip}`);
			store.setMessage(body.output);
		})
		.catch(() => {
			store.reset();
		});
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
		.catch(() => {
			store.reset();
		});
}

function checkVPN(store) {
	apiService.network
		.checkVPN()
		.then((body) => {
			store.setSummary(`VPN IP Address: ${body.ip}`);
			store.setMessage(body.output);
		})
		.catch(() => {
			store.reset();
		});
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
		.catch(() => {
			store.reset();
		});
}


export {
	checkInternet,
	restartInternet,
	checkVPN,
	restartVPN
}
