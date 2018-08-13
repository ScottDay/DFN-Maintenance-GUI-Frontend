import React from 'react';

import Presenter from './presenter';
import * as service from './service';
import store from './store';


export default class Header extends React.Component {
	render() {
		return (
			<Presenter
				service={service}
				store={store}
			/>
		);
	}
}
