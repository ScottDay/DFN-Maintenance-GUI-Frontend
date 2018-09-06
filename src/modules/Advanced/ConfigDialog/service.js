/* eslint-disable no-console */
import { apiService } from 'services';
import { requestStore } from 'stores';
import { endpoints } from 'constants';


function getConfig(store) {
	apiService.configfile
		.getConfig()
		.then((body) => {
			const { config } = body;
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

			store.setRows(resultingConfig)
		})
		.catch(() => {})
		.finally(() => requestStore.setRequestInProgress(endpoints.configfile.config, false));
}


export {
	// eslint-disable-next-line import/prefer-default-export
	getConfig
}
/* eslint-enable no-console */
