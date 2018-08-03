import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export default class ProtectedRoute extends React.Component {
	render() {
		// TODO: Check store if authenticated.
		// eslint-disable-next-line no-constant-condition
		if (true) {
			return <Route {...this.props} />;
		}

		return <Redirect to='/' />;
	}
}
