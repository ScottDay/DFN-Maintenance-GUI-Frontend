import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';

import store from './store';


function cameraStatus() {
	apiService.camera.dslr
		.status()
		.then((body) => store.setInitialStatus(body.status))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.camera.dslr.status, false));
}

function cameraOn() {
	apiService.camera.dslr
		.on()
		.then((body) => store.setStatus(body.status))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.camera.dslr.on, false));
}

function cameraOff() {
	apiService.camera.dslr
		.off()
		.then((body) => store.setStatus(body.status))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.camera.dslr.off, false));
}


export {
	cameraStatus,
	cameraOn,
	cameraOff
}
