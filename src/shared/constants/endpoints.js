const session = {
	auth: '/auth',
	check: '/api/session/check',
	hostname: '/api/session/hostname'
};

const network = {
	internet: {
		check: '/api/network/internet/check',
		restart: '/api/network/internet/restart'
	},
	vpn: {
		check: '/api/network/vpn/check',
		restart: '/api/network/vpn/restart'
	}
};

const configfile = {
	check: '/api/configfile/check',
	whitelist: '/api/configfile/whitelist',
	config: '/api/configfile/config'
};

const storage = {
	check: '/api/storage/check'
};

const location = {
	time: '/api/location/time',
	gps: '/api/location/gps'
};


export {
	session,
	network,
	configfile,
	storage,
	location
}
