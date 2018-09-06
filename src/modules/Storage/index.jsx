import React from 'react';

import Presenter from './presenter';
import store from './store';
import * as service from './service';


export default class Storage extends React.Component {
	constructor(props) {
		super(props);

		this.config = {
			columns: [
				{ name: 'status', title: 'Status' },
				{ name: 'device', title: 'Device' },
				{ name: 'total', title: 'Total' },
				{ name: 'used', title: 'Used' },
				{ name: 'free', title: 'Free' },
				{ name: 'percent', title: 'Percent' },
				{ name: 'type', title: 'Type' },
				{ name: 'mount', title: 'Mount' }
			],
			defaultColumnWidths: [
				{ columnName: 'status', width: 100 },
				{ columnName: 'device', width: 100 },
				{ columnName: 'total', width: 100 },
				{ columnName: 'used', width: 100 },
				{ columnName: 'free', width: 100 },
				{ columnName: 'percent', width: 100 },
				{ columnName: 'type', width: 100 },
				{ columnName: 'mount', width: 100 }
			],
			grouping: [{ columnName: 'status' }],
			defaultExpandedGroups: ['mounted']
		};
	}

	componentDidMount() {
		service.check(store);
	}

	render() {
		return (
			<Presenter store={store} config={this.config} />
		);
	}
}
