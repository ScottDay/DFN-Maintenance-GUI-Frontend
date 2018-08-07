import React from 'react';
import { Provider } from 'mobx-react';

import loginStore from './loginStore';
import loginService from './loginService';
import LoginContainer from './containers';

import { sessionAction } from '../../shared/actions';


export default class Login extends React.Component {
	componentDidMount() {
		sessionAction.fetchHostname();
	}

	render() {
		return (
			<Provider {...loginStore}>
				<LoginContainer	loginService={loginService}	/>
			</Provider>
		);
	}
}
