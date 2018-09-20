import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { NetworkCard } from 'containers';


@observer
export default class Commands extends React.Component {
	render() {
		const { service } = this.props;

		return (
			<React.Fragment>
				<Grid item xs={12} md={6}>
					<NetworkCard
						title='Mount'
						subheader='Test subheader'
						onClick={service.mount}
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<NetworkCard
						title='Unmount'
						subheader='Test subheader'
						onClick={service.unmount}
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<NetworkCard
						title='Power On'
						subheader='Test subheader'
						onClick={service.powerOn}
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<NetworkCard
						title='Power Off'
						subheader='Test subheader'
						onClick={service.powerOff}
					/>
				</Grid>
			</React.Fragment>
		);
	}
}
