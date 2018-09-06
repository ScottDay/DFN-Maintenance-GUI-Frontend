import React from 'react';

import Presenter from './presenter';
import Store from './store';
import * as service from './service';


export default class ConfigDialog extends React.Component {
	constructor(props) {
		super(props);

		this.viewConfigStore = new Store();
		this.editConfigStore = new Store();

		this.tableConfig = {
			columns: [
				{
					name: 'category',
					title: 'Category'
				},
				{
					name: 'field',
					title: 'Field'
				},
				{
					name: 'value',
					title: 'Value'
				}
			],
			defaultColumnWidths: [
				{
					columnName: 'category',
					width: 130
				},
				{
					columnName: 'field',
					width: 170
				},
				{
					columnName: 'value',
					width: 319
				}
			],
			editingStateColumnExtensions: [
				{
					columnName: 'category',
					editingEnabled: false
				},
				{
					columnName: 'field',
					editingEnabled: false
				}
			]
		};
	}

	componentDidMount() {
		service.whitelist(this.editConfigStore);
		service.getConfig(this.viewConfigStore);
	}

	render() {
		return (
			<Presenter
				viewConfigStore={this.viewConfigStore}
				editConfigStore={this.editConfigStore}
				tableConfig={this.tableConfig}
				updateConfig={service.updateConfig}
			/>
		);
	}
}
