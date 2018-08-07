import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import sessionAction from '../../actions';


export default class ProtectedRoute extends React.Component {
	render() {
		sessionAction.authenticate();

		if (isAuthenticated) {
			return <Route {...this.props} />;
		}

		return <Redirect to='/login' />;
	}
}
