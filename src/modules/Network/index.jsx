import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import * as service from './service';
import SideBySideCard from './SideBySideCard';


export default class Network extends React.Component {
	constructor(props) {
		super(props);

		this.internetCards = [
			{
				title: 'Check Connection',
				subheader: 'Retrieves the IP address of the backend server.',
				onClick: service.checkInternet
			},
			{
				title: 'Restart Connection',
				subheader: 'Restarts the modems network interface. May take some time...',
				onClick: service.restartInternet
			}
		];

		this.vpnCards = [
			{
				title: 'Check Connection',
				subheader: 'Retrieves the VPN IP address of the backend server.',
				onClick: service.checkVPN
			},
			{
				title: 'Restart Connection',
				subheader: 'Restarts the VPN service.',
				onClick: service.restartVPN
			}
		];
	}

	render() {
		return (
			<Page title='Network'>
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12}>
						<SideBySideCard
							sectionTitle='Internet'
							cards={this.internetCards}
						/>
					</Grid>

					<Grid item xs={12} sm={12}>
						<SideBySideCard
							sectionTitle='VPN'
							cards={this.vpnCards}
						/>
					</Grid>
				</Grid>
			</Page>
		);
	}
}
