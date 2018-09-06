import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';


function check(store) {
	apiService.storage
		.check()
		.then((body) => store.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.check, false));
}


export {
	// eslint-disable-next-line
	check
}
