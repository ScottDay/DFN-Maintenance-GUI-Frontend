import React from 'react';

import Presenter from './presenter';
import Store from './store';


export default class ConfigDialog extends React.Component {
	constructor(props) {
		super(props);

		this.viewConfigStore = new Store();
		this.editConfigStore = new Store();
	}

	render() {
		return (
			<Presenter
				viewConfigStore={this.viewConfigStore}
				editConfigStore={this.editConfigStore}
			/>
		);
	}
}
