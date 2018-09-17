import { endpoints } from 'constants';

import api from './superagent';


const session = {
	auth: (username, password) =>
		api.post(endpoints.session.auth, { username, password }),
	check: () =>
		api.get(endpoints.session.check),
	hostname: () =>
		api.get(endpoints.session.hostname),
	refresh: () =>
		api.get(endpoints.session.refresh)
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
		api.get(endpoints.storage.check),
	power: {
		on: () =>
			api.get(endpoints.storage.power.on),
		off: () =>
			api.get(endpoints.storage.power.off)
	},
	mount: () =>
		api.get(endpoints.storage.mount),
	unmount: () =>
		api.get(endpoints.storage.unmount)
};

const location = {
	getTime: () =>
		api.get(endpoints.location.time),
	updateTimezone: (timezone) =>
		api.put(endpoints.location.time, timezone),
	getGPS: () =>
		api.get(endpoints.location.gps)
};

const camera = {
	dslr: {
		status: () =>
			api.get(endpoints.camera.dslr.status),
		on: () =>
			api.get(endpoints.camera.dslr.on),
		off: () =>
			api.get(endpoints.camera.dslr.off)
	}
};


export {
	session,
	network,
	configfile,
	storage,
	location,
	camera
}
