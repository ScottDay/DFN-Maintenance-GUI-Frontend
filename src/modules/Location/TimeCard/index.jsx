import React from 'react';

import Grid from '@material-ui/core/Grid';

import { BaseCard } from 'components';

import store from './store';
import * as service from './service';
import Timestamps from './Timestamps';
import TimezonePicker from './TimezonePicker';


export default class TimeCard extends React.Component {
	componentDidMount() {
		service.getTime();
	}

	render() {
		return (
			<Grid item sm={12}>
				<BaseCard basic title='Time'>
					<Timestamps store={store} />
					<TimezonePicker store={store} updateTimezone={service.updateTimezone} />
				</BaseCard>
			</Grid>
		);
	}
}
