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
				<Grid item xs={12} sm={6}>
					<NetworkCard
						title='Mount'
						subheader='Mounts the systems external drives.'
						onClick={service.mount}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<NetworkCard
						title='Unmount'
						subheader='Unmounts the systems external drives.'
						onClick={service.unmount}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<NetworkCard
						title='Power On'
						subheader='Turns on the systems external drives.'
						onClick={service.powerOn}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<NetworkCard
						title='Power Off'
						subheader='Turns off the systems external drives.'
						onClick={service.powerOff}
					/>
				</Grid>
			</React.Fragment>
		);
	}
}
