import { apiService } from 'services';
import { notificationStore, requestStore } from 'stores';
import { notificationTypes, endpoints } from 'constants';


function check(store) {
	apiService.network
		.checkInternet()
		.then((body) => {
			store.setSummary(`IP Address: ${body.ip}`);
			store.setOutput(body.output);
		})
		.catch(() => store.reset())
		.finally(() => requestStore.setRequestInProgress(endpoints.network.internet.check, false));
}

function restart(store) {
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


export {
	check,
	restart
}
