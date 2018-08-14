import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import CustomCard from './CustomCard';


@observer
export default class Presenter extends React.Component {
	render() {
		const { service } = this.props;

		return (
			<div className='container-fluid with-maxwidth chapter'>
				<article className='article'>
					<h2 className='article-title'>
						Network
					</h2>

					<Grid container spacing={24}>
						<Grid item md>
							<CustomCard
								title='Check Internet Connection'
								subheader='Retrieves the IP address of the backend server.'
								onClickHandler={service.checkInternet}
							/>
						</Grid>

						<Grid item md>
							<CustomCard
								title='Restart Internet Connection'
								subheader='Restarts the modems network interface.'
								onClickHandler={service.restartInternet}
							/>
						</Grid>
					</Grid>
				</article>
			</div>
		);
	}
}
