import React from 'react';

import Presenter from './presenter';
import Store from '../store';
import * as service from './service';


export default class VPN extends React.Component {
	constructor(props) {
		super(props);

		this.checkStore = new Store();
		this.restartStore = new Store();
	}

	render() {
		return (
			<Presenter
				service={service}
				checkStore={this.checkStore}
				restartStore={this.restartStore}
			/>
		);
	}
}
