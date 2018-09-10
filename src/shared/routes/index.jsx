import { Storage, Network, Advanced, Location, Camera } from 'modules';


const appRoutes = [
	{ path: '', name: 'StoragePage', component: Storage },
	{ path: '/camera', name: 'CameraPage', component: Camera },
	{ path: '/network', name: 'NetworkPage', component: Network },
	{ path: '/location', name: 'LocationPage', component: Location },
	{ path: '/advanced', name: 'AdvancedPage', component: Advanced }
];


// eslint-disable-next-line import/prefer-default-export
export { appRoutes }
