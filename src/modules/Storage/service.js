import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';

import partitionStore from './store';


// TODO: Method to compare difference in returned partitions to what is currently in store, notify user the difference.
// TODO: Take in a store for summary, and output, each with a timestamp.
export function partitions(store) {
	apiService.storage
		.partitions()
		.then((body) => store.setRows(body.partitions))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.partitions, false));
}

export function mount(store) {
	apiService.storage
		.mount()
		.then((body) => {
			store.setSummary('Test summary');
			store.setLog(body.log);

			partitionStore.setRows(body.partitions)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.mount, false));
}

export function unmount(store) {
	apiService.storage
		.unmount()
		.then((body) => {
			store.setSummary('Test summary');
			store.setLog(body.log);

			partitionStore.setRows(body.partitions)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.unmount, false));
}

export function powerOn(store) {
	apiService.storage.power
		.on()
		.then((body) => {
			store.setSummary('Test summary');
			store.setLog(body.log);

			partitionStore.setRows(body.partitions)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.power.on, false));
}

export function powerOff(store) {
	apiService.storage.power
		.off()
		.then((body) => {
			store.setSummary('Test summary');
			store.setLog(body.log);

			partitionStore.setRows(body.partitions)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.power.off, false));
}

export function smart(store) {
	apiService.storage
		.smart()
		.then((body) => {
			store.setLog(body.log);
			partitionStore.setRows(body.partitions)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.storage.smart, false));
}
