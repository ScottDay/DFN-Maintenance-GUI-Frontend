const session = {
	auth: '/api/session/auth',
	check: '/api/session/check',
	hostname: '/api/session/hostname',
	refresh: '/api/session/refresh'
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
	check: '/api/storage/check',
	power: {
		on: '/api/storage/power/on',
		off: '/api/storage/power/off'
	},
	mount: '/api/storage/mount',
	unmount: '/api/storage/unmount'
};

const location = {
	time: '/api/location/time',
	gps: '/api/location/gps'
};

const camera = {
	dslr: {
		status: '/api/camera/dslr',
		on: '/api/camera/dslr/on',
		off: '/api/camera/dslr/off'
	}
}


export {
	session,
	network,
	configfile,
	storage,
	location,
	camera
}
