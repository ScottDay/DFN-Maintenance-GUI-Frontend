import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { BaseCard } from 'components';


@observer
export default class Commands extends React.Component {
	render() {
		return (
			<BaseCard basic title='Commands'>
				<Grid container spacing={24}>
					<Grid item xs={12} sm={6}>
						Mount
					</Grid>

					<Grid item xs={12} sm={6}>
						Unmount
					</Grid>

					<Grid item xs={12} sm={6}>
						Power On
					</Grid>

					<Grid item xs={12} sm={6}>
						Power Off
					</Grid>
				</Grid>
			</BaseCard>
		);
	}
}
