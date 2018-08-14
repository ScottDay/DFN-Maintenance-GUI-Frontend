import { endpoints } from 'constants';

import api from './superagent';


const Session = {
	check: (token) =>
		api.post(endpoints.session.check, token),
	generate: (username, password) =>
		api.post(endpoints.session.generate, { username, password }),
	hostname: () =>
		api.get(endpoints.session.hostname)
};

const Network = {
	checkInternet: () =>
		api.get(endpoints.network.checkInternet)
};


export {
	Session,
	Network
}
