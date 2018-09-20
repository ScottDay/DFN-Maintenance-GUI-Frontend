import { endpoints } from 'constants';

import { get, post, put } from './superagent';


export const session = {
	auth: (username, password) =>
		post(endpoints.session.auth, { username, password }),
	check: () =>
		get(endpoints.session.check),
	hostname: () =>
		get(endpoints.session.hostname),
	refresh: () =>
		get(endpoints.session.refresh)
};

export const network = {
	internet: {
		check: () =>
			get(endpoints.network.internet.check),
		restart: () =>
			get(endpoints.network.internet.restart)
	},
	vpn: {
		check: () =>
			get(endpoints.network.vpn.check),
		restart: () =>
			get(endpoints.network.vpn.restart)
	}
};

export const configfile = {
	/* check: () =>
		api.get(endpoints.configfile.check), */
	whitelist: () =>
		get(endpoints.configfile.whitelist),
	getConfig: () =>
		get(endpoints.configfile.config),
	updateConfig: (row) =>
		put(endpoints.configfile.config, row)
};

export const storage = {
	partitions: () =>
		get(endpoints.storage.partitions),
	power: {
		on: () =>
			get(endpoints.storage.power.on),
		off: () =>
			get(endpoints.storage.power.off)
	},
	mount: () =>
		get(endpoints.storage.mount),
	unmount: () =>
		get(endpoints.storage.unmount)
};

export const location = {
	getTime: () =>
		get(endpoints.location.time),
	updateTimezone: (timezone) =>
		put(endpoints.location.time, timezone),
	getGPS: () =>
		get(endpoints.location.gps)
};

export const camera = {
	dslr: {
		status: () =>
			get(endpoints.camera.dslr.status),
		on: () =>
			get(endpoints.camera.dslr.on),
		off: () =>
			get(endpoints.camera.dslr.off)
	}
};
