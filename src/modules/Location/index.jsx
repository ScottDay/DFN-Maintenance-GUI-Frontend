import React from 'react';

import Presenter from './presenter';
import store from './store';
import * as service from './service';


export default class Location extends React.Component {
	componentDidMount() {
		service.getTime();
	}

	render() {
		return (
			<Presenter
				store={store}
				updateTimezone={service.updateTimezone}
			/>
		);
	}
}
