import React from 'react';

import { sessionAction } from 'actions';
import { sessionStore } from 'stores';

import Presenter from './presenter';
import loginService from './loginService';
import loginStore from './loginStore';


export default class Login extends React.Component {
	componentDidMount() {
		sessionAction.fetchHostname();
	}

	render() {
		return (
			<Presenter
				loginService={loginService}
				loginStore={loginStore}
				sessionStore={sessionStore}
			/>
		);
	}
}
