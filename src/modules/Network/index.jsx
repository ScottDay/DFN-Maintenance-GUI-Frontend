import React from 'react';

import Presenter from './presenter';
import Store from './store';
import * as service from './service';


export default class Network extends React.Component {
	constructor(props) {
		super(props);

		const checkInternetStore = new Store();
		const restartInternetStore = new Store();
		const checkVPNStore = new Store();
		const restartVPNStore = new Store();

		this.sections = [
			{
				title: 'Internet',
				cards: [
					{
						title: 'Check Connection',
						subheader: 'Retrieves the IP address of the backend server.',
						store: checkInternetStore,
						onClick: () => service.checkInternet(checkInternetStore)
					},
					{
						title: 'Restart Connection',
						subheader: 'Restarts the modems network interface. May take some time...',
						store: restartInternetStore,
						onClick: () => service.restartInternet(restartInternetStore)
					}
				]
			},
			{
				title: 'VPN',
				cards: [
					{
						title: 'Check Connection',
						subheader: 'Retrieves the VPN IP address of the backend server.',
						store: checkVPNStore,
						onClick: () => service.checkVPN(checkVPNStore)
					},
					{
						title: 'Restart Connection',
						subheader: 'Restarts the VPN service.',
						store: restartVPNStore,
						onClick: () => service.restartVPN(restartVPNStore)
					}
				]
			}
		];
	}

	render() {
		return (
			<Presenter sections={this.sections} />
		);
	}
}
