import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { BaseCard } from 'components';
import NetworkCard from '../NetworkCard';


@observer
export default class Presenter extends React.Component {
	render() {
		const {
			service,
			checkStore,
			restartStore
		} = this.props;

		return (
			<BaseCard basic title='VPN'>
				<Grid container spacing={24}>
					<Grid item xs={12} lg={6}>
						<NetworkCard
							title='Check Connection'
							subheader='Retrieves the VPN IP address of the backend server.'
							disabled={!checkStore.shouldDisplayContent}
							onClick={() => service.check(checkStore)}
							summary={checkStore.summary}
							output={checkStore.output}
						/>
					</Grid>

					<Grid item xs={12} lg={6}>
						<NetworkCard
							title='Restart Connection'
							subheader='Restarts the VPN service.'
							disabled={!restartStore.shouldDisplayContent}
							onClick={() => service.restart(restartStore)}
							summary={restartStore.summary}
							output={restartStore.output}
						/>
					</Grid>
				</Grid>
			</BaseCard>
		);
	}
}
