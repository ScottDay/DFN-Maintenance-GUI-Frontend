import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints, timezones } from 'constants';

import store from './store';


function getTime() {
	apiService.location
		.getTime()
		.then((body) => {
			const index = timezones.findIndex((timezone) => timezone.key === body.timezone);

			// TODO: Notify of an error if a matching timezone could not be found (-1)...
			store.setTime(body, index)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.location.getTime, false));
}

function updateTimezone(timezone, index) {
	apiService.location
		.updateTimezone([timezone])
		.then(() => store.setTimezone(index))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.location.updateTimezone, false));
}


export {
	getTime,
	updateTimezone
}
