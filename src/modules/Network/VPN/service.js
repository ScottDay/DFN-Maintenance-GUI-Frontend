import { apiService } from 'services';
import { notificationStore, requestStore } from 'stores';
import { notificationTypes, endpoints } from 'constants';


function check(store) {
	apiService.network
		.checkVPN()
		.then((body) => {
			store.setSummary(`VPN IP Address: ${body.ip}`);
			store.setMessage(body.output);
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.vpn.check, false));
}

function restart(store) {
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
	check,
	restart
}
