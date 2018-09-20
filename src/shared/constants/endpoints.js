export const session = {
	auth: '/api/session/auth',
	check: '/api/session/check',
	hostname: '/api/session/hostname',
	refresh: '/api/session/refresh'
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
	partitions: '/api/storage/partitions',
	power: {
		on: '/api/storage/power/on',
		off: '/api/storage/power/off'
	},
	mount: '/api/storage/mount',
	unmount: '/api/storage/unmount'
};

export const location = {
	time: '/api/location/time',
	gps: '/api/location/gps'
};

export const camera = {
	dslr: {
		status: '/api/camera/dslr',
		on: '/api/camera/dslr/on',
		off: '/api/camera/dslr/off'
	}
};
