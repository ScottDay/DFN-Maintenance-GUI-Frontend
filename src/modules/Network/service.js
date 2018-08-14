/* eslint-disable no-console */

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

			notificationStore.addNotification({
				content: {
					type: notificationTypes.ERROR,
					message: "Error while executing command..."
				}
			});
		});
}

// TODO: Implement.
function restartInternet() {
	console.log("RESTART INTERNET STUB");
}


export {
	checkInternet,
	restartInternet
}
/* eslint-enable no-console */
