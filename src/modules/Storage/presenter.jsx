import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import PartitionTable from './PartitionTable';
import Commands from './Commands';


@observer
export default class Presenter extends React.Component {
	render() {
		return (
			<Page title='Storage'>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<PartitionTable {...this.props} />
					</Grid>

					<Grid item xs={12}>
						<Commands />
					</Grid>
				</Grid>
			</Page>
		);
	}
}
