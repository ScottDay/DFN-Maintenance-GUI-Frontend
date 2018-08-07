import React from 'react';

import Presenter from './presenter';
import loginService from './loginService';
import loginStore from './loginStore';

import { sessionAction } from '../../shared/actions';
import { sessionStore } from '../../shared/stores';


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
