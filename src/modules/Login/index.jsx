import React from 'react';

import loginService from './loginService';
import loginStore from './loginStore';
import LoginContainer from './containers';

import { sessionAction } from '../../shared/actions';


export default class Login extends React.Component {
	/*componentDidMount() {
		sessionAction.fetchHostname();
	}*/

	render() {
		return (
			<LoginContainer
				loginService={loginService}
				loginStore={loginStore}
			/>
		);
	}
}
