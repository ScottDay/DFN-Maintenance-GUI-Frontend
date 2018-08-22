import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import Internet from './Internet';
import VPN from './VPN';


export default class Network extends React.Component {
	render() {
		return (
			<Page title='Network'>
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12}>
						<Internet />
					</Grid>

					<Grid item xs={12} sm={12}>
						<VPN />
					</Grid>
				</Grid>
			</Page>
		);
	}
}
