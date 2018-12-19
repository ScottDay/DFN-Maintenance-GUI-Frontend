import React from 'react';

import Grid from "@material-ui/core/Grid/Grid";

import { Page } from 'components';

import ConfigDialog from './ConfigDialog';
import Power from './Power';


export default class Advanced extends React.Component {
	render() {
		return (
			<Page title='Advanced'>
				<Grid container spacing={24}>
					{/* Update buttons (python software, leostick firmware, maintenance gui) */}

					<Grid item xs={12} sm={6}>
						<ConfigDialog />
					</Grid>

					<Grid item xs={12} sm={6}>
						<Power />
					</Grid>
				</Grid>
			</Page>
		);
	}
}
