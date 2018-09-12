import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';

import partitionStore from '../store';


// TODO: Method to compare difference in returned partitions to what is currently in store, notify user the difference.
// TODO: Take in a store for summary, and output, each with a timestamp.

function mount() {
	apiService.storage
		.mount()
		.then((body) => partitionStore.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.mount, false));
}

function unmount() {
	apiService.storage
		.unmount()
		.then((body) => partitionStore.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.unmount, false));
}

function powerOn() {
	apiService.storage.power
		.on()
		.then((body) => partitionStore.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.power.on, false));
}

function powerOff() {
	apiService.storage.power
		.off()
		.then((body) => partitionStore.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.power.off, false));
}


export {
	mount,
	unmount,
	powerOn,
	powerOff
}
