import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { BaseCard } from 'components';

import getGPS from './service';
import store from './store';


@observer
export default class GPSCard extends React.Component {
	componentDidMount() {
		getGPS();
	}

	render() {
		return (
			<React.Fragment>
				<Grid item xs={12} sm={6}>
					<BaseCard basic title='GPS Status'>
						<Grid container>
							<Grid item sm={12} md={6}>
								Lock: {store.lock}
							</Grid>

							<Grid item sm={12} md={6}>
								Satellites: {store.satellites}
							</Grid>
						</Grid>
					</BaseCard>
				</Grid>

				<Grid item xs={12} sm={6}>
					<BaseCard basic title='Location'>
						<Grid container>
							<Grid item sm={12} md={4}>
								Altitude: {store.altitude}
							</Grid>

							<Grid item sm={12} md={4}>
								Latitude: {store.latitude}
							</Grid>

							<Grid item sm={12} md={4}>
								Longitude: {store.longitude}
							</Grid>
						</Grid>
					</BaseCard>
				</Grid>
			</React.Fragment>
		);
	}
}
