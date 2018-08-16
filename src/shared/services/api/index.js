import { endpoints } from 'constants';

import api from './superagent';


const session = {
	check: () =>
		api.get(endpoints.session.check),
	auth: (username, password) =>
		api.post(endpoints.session.auth, { username, password }),
	hostname: () =>
		api.get(endpoints.session.hostname)
};

const network = {
	checkInternet: () =>
		api.get(endpoints.network.checkInternet),
	restartInternet: () =>
		api.get(endpoints.network.restartInternet),
	checkVPN: () =>
		api.get(endpoints.network.checkVPN),
	restartVPN: () =>
		api.get(endpoints.network.restartVPN)
};


export {
	session,
	network
}
