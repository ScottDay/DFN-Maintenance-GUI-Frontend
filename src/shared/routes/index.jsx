import React from 'react';

import { Storage, Network, Advanced, Location } from 'modules';


function CameraStub() {
	return (<div>CameraStub</div>);
}

const appRoutes = [
	{ path: '', name: 'StoragePage', component: Storage },
	{ path: '/camera', name: 'CameraPage', component: CameraStub },
	{ path: '/network', name: 'NetworkPage', component: Network },
	{ path: '/location', name: 'LocationPage', component: Location },
	{ path: '/advanced', name: 'AdvancedPage', component: Advanced }
];


export {
	// eslint-disable-next-line import/prefer-default-export
	appRoutes
}
