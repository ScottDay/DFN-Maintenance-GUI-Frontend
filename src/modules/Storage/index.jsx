import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import PartitionTable from './PartitionTable';
import Commands from './Commands';
import store from './store';
import * as service from './service';


@observer
export default class Storage extends React.Component {
	constructor(props) {
		super(props);

		this.config = {
			columns: [
				{ name: 'status',  title: 'Status' },
				{ name: 'device',  title: 'Device' },
				{ name: 'total',   title: 'Total' },
				{ name: 'used',    title: 'Used' },
				{ name: 'free',    title: 'Free' },
				{ name: 'percent', title: 'Percent' },
				{ name: 'type',    title: 'Type' },
				{ name: 'mount',   title: 'Mount' }
			],
			defaultColumnWidths: [
				{ columnName: 'status',  width: 100 },
				{ columnName: 'device',  width: 100 },
				{ columnName: 'total',   width: 100 },
				{ columnName: 'used',    width: 100 },
				{ columnName: 'free',    width: 100 },
				{ columnName: 'percent', width: 100 },
				{ columnName: 'type',    width: 100 },
				{ columnName: 'mount',   width: 100 }
			],
			grouping: [{ columnName: 'status' }],
			defaultExpandedGroups: ['mounted']
		};
	}

	componentDidMount() {
		service.partitions(store);
	}

	render() {
		return (
			<Page title='Storage'>
				<Grid container spacing={24}>
					<PartitionTable store={store} config={this.config} />
					<Commands service={service} />
				</Grid>
			</Page>
		);
	}
}
