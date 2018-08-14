import React from 'react';

import Presenter from './presenter';
import * as service from './service';


export default class Network extends React.Component {
	render() {
		return (
			<Presenter service={service} />
		);
	}
}
