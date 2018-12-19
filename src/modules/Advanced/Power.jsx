import React from 'react';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { BaseCard } from 'components';

import * as service from './service';


export default class Power extends React.Component {
	render() {
		return (
			<BaseCard
				title='Power'
				subheader='Shutdown or restart the server. Both are immediate.'
				actions={
					<CardActions>
						<Button
							size='small'
							color='primary'
							onClick={() => service.shutdown()}
						>
							Shutdown
						</Button>
						<Button
							size='small'
							color='primary'
							onClick={() => service.restart()}
						>
							Restart
						</Button>
					</CardActions>
				}
			/>
		);
	}
}
