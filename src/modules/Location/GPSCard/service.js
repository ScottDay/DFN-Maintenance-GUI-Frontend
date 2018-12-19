import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';

import store from './store';


export default function getGPS() {
	apiService.location
		.getGPS()
		.then((body) => store.setGPS(body))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.location.getGPS, false));
}
