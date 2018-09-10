import {
	Storage,
	Network,
	Advanced,
	Location,
	Camera
} from 'modules';


const routes = [
	{ path: '', name: 'StoragePage', component: Storage },
	{ path: '/camera', name: 'CameraPage', component: Camera },
	{ path: '/network', name: 'NetworkPage', component: Network },
	{ path: '/location', name: 'LocationPage', component: Location },
	{ path: '/advanced', name: 'AdvancedPage', component: Advanced }
];


export default routes;
