import { endpoints } from 'constants';

import api from './superagent';


// TODO: Rename this to session.
const Session = {
	check: (token) =>
		api.post(endpoints.session.check, token),
	generate: (username, password) =>
		api.post(endpoints.session.generate, { username, password }),
	hostname: () =>
		api.get(endpoints.session.hostname)
};

const network = {
	checkInternet: () =>
		api.get(endpoints.network.checkInternet)
};


export {
	Session,
	network
}
