import { endpoints } from 'constants';

import api from './superagent';


const session = {
	auth: (username, password) =>
		api.post(endpoints.session.auth, { username, password }),
	check: () =>
		api.get(endpoints.session.check),
	hostname: () =>
		api.get(endpoints.session.hostname)
};

const network = {
	checkInternet: () =>
		api.get(endpoints.network.internet.check),
	restartInternet: () =>
		api.get(endpoints.network.internet.restart),
	checkVPN: () =>
		api.get(endpoints.network.vpn.check),
	restartVPN: () =>
		api.get(endpoints.network.vpn.restart)
};

const configfile = {
	/* check: () =>
		api.get(endpoints.configfile.check), */
	whitelist: () =>
		api.get(endpoints.configfile.whitelist),
	getConfig: () =>
		api.get(endpoints.configfile.config),
	updateConfig: (row) =>
		api.put(endpoints.configfile.config, row)
};

const storage = {
	check: () =>
		api.get(endpoints.storage.check)
};


export {
	session,
	network,
	configfile,
	storage
}
