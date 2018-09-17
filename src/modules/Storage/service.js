import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';


function partitions(store) {
	apiService.storage
		.partitions()
		.then((body) => store.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.partitions, false));
}


// eslint-disable-next-line
export { partitions }
