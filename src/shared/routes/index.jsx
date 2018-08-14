import React from 'react';

import { Storage, Network } from 'modules';


function CameraStub() {
	return (<div>CameraStub</div>);
}

function LocationStub() {
	return (<div>LocationStub</div>);
}

function AdvancedStub() {
	return (<div>AdvancedStub</div>);
}

const appRoutes = [
	{ path: '', name: 'StoragePage', component: Storage },
	{ path: '/camera', name: 'CameraPage', component: CameraStub },
	{ path: '/network', name: 'NetworkPage', component: Network },
	{ path: '/location', name: 'LocationPage', component: LocationStub },
	{ path: '/advanced', name: 'AdvancedPage', component: AdvancedStub }
];


export {
	// eslint-disable-next-line import/prefer-default-export
	appRoutes
}
