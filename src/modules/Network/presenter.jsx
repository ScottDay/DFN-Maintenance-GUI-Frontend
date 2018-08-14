import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import LaunchIcon from '@material-ui/icons/Launch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


@observer
export default class Presenter extends React.Component {
	render() {
		const { service, store } = this.props;

		return (
			<div className='container-fluid with-maxwidth chapter'>
				<article className='article'>
					<h2 className='article-title'>
						Network
					</h2>

					<Grid container spacing={24}>
						<Grid item md>
							<Card>
								<CardHeader
									title='Check Internet Connection'
									subheader='Retrieves the IP address of the backend server.'
									action={
										<div>
											<Tooltip title='Execute Command'>
												<IconButton onClick={() => service.checkInternet()}>
													<LaunchIcon />
												</IconButton>
											</Tooltip>
											<Tooltip title='View Output'>
												<span>
													<IconButton
														disabled={!store.canDisplayContent}
														onClick={() => store.toggleIsOpen()}
													>
														<ExpandMoreIcon />
													</IconButton>
												</span>
											</Tooltip>
										</div>
									}
								/>
								{store.shouldDisplaySummary ?
									<CardContent>
										<Typography component='p'>
											{store.summary}
										</Typography>
									</CardContent>
									: null
								}
								<Collapse in={store.isOpen} timeout='auto' unmountOnExit>
									<CardContent>
										<Typography paragraph variant='title'>
											Output:
										</Typography>
										<Typography paragraph>
											{store.message}
										</Typography>
									</CardContent>
								</Collapse>
							</Card>
						</Grid>

						<Grid item md>
							<Card>
								<CardHeader
									title='Restart Internet'
									subheader='Restarts the modem network interface.'
									action={
										<div>
											<Tooltip title='Execute Command'>
												<IconButton onClick={() => service.restartInternet()}>
													<LaunchIcon />
												</IconButton>
											</Tooltip>
											<Tooltip title='View Output'>
												<span>
													<IconButton
														disabled={!store.canDisplayContent}
														onClick={() => store.toggleIsOpen()}
													>
														<ExpandMoreIcon />
													</IconButton>
												</span>
											</Tooltip>
										</div>
									}
								/>
								{store.shouldDisplaySummary ?
									<CardContent>
										<Typography component='p'>
											{store.summary}
										</Typography>
									</CardContent>
									: null
								}
								<Collapse in={store.isOpen} timeout='auto' unmountOnExit>
									<CardContent>
										<Typography paragraph variant='title'>
											Output:
										</Typography>
										<Typography paragraph>
											{store.message}
										</Typography>
									</CardContent>
								</Collapse>
							</Card>
						</Grid>
					</Grid>
				</article>
			</div>
		);
	}
}
