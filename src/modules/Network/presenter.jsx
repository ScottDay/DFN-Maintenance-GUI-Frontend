import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

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
						<Grid item xs={12} sm={12}>
							<Card>
								<CardHeader title='Internet' />
								<CardContent>
									<Grid container spacing={24}>
										<Grid item xs={12} lg={6}>
											<CustomCard
												title='Check Connection'
												subheader='Retrieves the IP address of the backend server.'
												onClickHandler={service.checkInternet}
											/>
										</Grid>

										<Grid item xs={12} lg={6}>
											<CustomCard
												title='Restart Connection'
												subheader='Restarts the modems network interface. May take some time...'
												onClickHandler={service.restartInternet}
											/>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} sm={12}>
							<Card>
								<CardHeader title='VPN' />
								<CardContent>
									<Grid container spacing={24}>
										<Grid item xs={12} lg={6}>
											<CustomCard
												title='Check Connection'
												subheader='Retrieves the VPN IP address of the backend server.'
												onClickHandler={service.checkVPN}
											/>
										</Grid>

										<Grid item xs={12} lg={6}>
											<CustomCard
												title='Restart Connection'
												subheader='Restarts the VPN service.'
												onClickHandler={service.restartVPN}
											/>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</article>
			</div>
		);
	}
}
