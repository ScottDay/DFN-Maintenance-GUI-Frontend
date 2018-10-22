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
	config: '/api/config',
	check: '/api/config/check',
	whitelist: '/api/config/whitelist'
};

export const storage = {
	partitions: '/api/storage/partitions',
	power: {
		on: '/api/storage/power/on',
		off: '/api/storage/power/off'
	},
	mount: '/api/storage/mount',
	unmount: '/api/storage/unmount',
	smart: '/api/storage/smart'
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
	},
	picture: {
		download: '/api/camera/picture/download',
		find: '/api/camera/picture/find'
	},
	thumbnail: {
		download: '/api/camera/thumbnail/download',
		remove: '/api/camera/thumbnail/remove'
	},
	video: {
		on: '/api/camera/video/on',
		off: '/api/camera/video/off'
	}
};
