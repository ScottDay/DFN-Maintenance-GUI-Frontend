import React from 'react';

import { sessionAction } from 'actions';
import { sessionStore } from 'stores';

import Presenter from './presenter';
import * as service from './service';
import store from './store';


export default class Login extends React.Component {
	componentDidMount() {
		sessionAction.refresh();
		sessionAction.hostname();
	}

	render() {
		return (
			<Presenter
				service={service}
				store={store}
				sessionStore={sessionStore}
			/>
		);
	}
}
