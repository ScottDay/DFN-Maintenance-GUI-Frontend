import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import GPSCard from './GPSCard';
import TimeCard from './TimeCard';


export default class Location extends React.Component {
	render() {
		return (
			<Page title='Location'>
				<Grid container spacing={24}>
					<GPSCard />
					<TimeCard />
				</Grid>
			</Page>
		);
	}
}
