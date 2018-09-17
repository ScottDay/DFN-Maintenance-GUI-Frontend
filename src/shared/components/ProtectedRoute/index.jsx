import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import { sessionAction } from 'actions';
import { sessionStore, requestStore } from 'stores';
import { endpoints } from 'constants';


@observer
export default class ProtectedRoute extends React.Component {
	constructor(props) {
		super(props);

		// If authentication has been enabled then authenticate with backend.
		if (process.env.auth) {
			sessionAction.check();
		}
	}

	render() {
		if (!process.env.auth || sessionStore.authenticated) {
			// eslint-disable-next-line
			console.log('route');

			return <Route {...this.props} />;
		} else if (requestStore.getRequestByType(endpoints.session.check)
			|| requestStore.getRequestByType(endpoints.session.refresh)) {
			// eslint-disable-next-line
			console.log('loading');

			return <div>Loading...</div>;
		}

		// eslint-disable-next-line
		console.log('redirect');

		return <Redirect to='/login' />;
	}
}
