import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import DSLR from './DSLR';


export default class Camera extends React.Component {
	render() {
		return (
			<Page title='Camera'>
				<Grid container spacing={24}>
					<DSLR />
				</Grid>
			</Page>
		);
	}
}
