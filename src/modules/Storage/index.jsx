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
				{ name: 'mount',   title: 'Mount' },
				{ name: 'label',   title: 'Label' },
				{ name: 'size',    title: 'Size' },
				{ name: 'used',    title: 'Used' },
				{ name: 'free',    title: 'Free' },
				{ name: 'percent', title: 'Percent' },
				{ name: 'type',    title: 'Type' }
			],
			grouping: [{ columnName: 'status' }],
			defaultExpandedGroups: ['mounted', 'unmounted', 'off']
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
