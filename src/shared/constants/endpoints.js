export const session = {
	auth: '/auth',
	check: '/api/session/check',
	hostname: '/api/session/hostname'
};

export const network = {
	internet: {
		check: '/api/network/internet/check',
		restart: '/api/network/internet/restart'
	},
	vpn: {
		check: '/api/network/vpn/check',
		restart: '/api/network/vpn/restart'
	}
};

export const configfile = {
	check: '/api/configfile/check',
	whitelist: '/api/configfile/whitelist',
	config: '/api/configfile/config'
};

export const storage = {
	check: '/api/storage/check'
};

export const location = {
	time: '/api/location/time'
};
