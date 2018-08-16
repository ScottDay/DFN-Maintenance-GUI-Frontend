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


export {
	session,
	network
}
