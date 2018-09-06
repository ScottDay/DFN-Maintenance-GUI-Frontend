/* eslint-disable no-console */
import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';


function processConfig(config) {
	const resultingConfig = [];

	let idCount = 0;

	Object.keys(config).forEach((categoryKey) => {
		Object.keys(config[categoryKey]).forEach((fieldKey) => {
			resultingConfig.push({
				id: idCount,
				category: categoryKey,
				field: fieldKey,
				value: config[categoryKey][fieldKey]
			});

			idCount += 1;
		});
	});

	return resultingConfig;
}

function whitelist(store) {
	apiService.configfile
		.whitelist()
		.then((body) => store.setRows(processConfig(body.whitelist)))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.configfile.whitelist, false));
}

function getConfig(store) {
	apiService.configfile
		.getConfig()
		.then((body) => store.setRows(processConfig(body.config)))
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.configfile.config, false));
}


export {
	whitelist,
	getConfig
}
/* eslint-enable no-console */
