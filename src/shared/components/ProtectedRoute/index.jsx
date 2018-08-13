import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import { sessionAction } from 'actions';
import { sessionStore, requestStore } from 'stores';
import { requestTypes } from 'constants';


@observer
export default class ProtectedRoute extends React.Component {
	constructor(props) {
		super(props);

		// If authentication has been enabled then authenticate with backend.
		if (process.env.auth) {
			sessionAction.authenticate();
		}
	}

	render() {
		if (!process.env.auth || sessionStore.authenticated) {
			return <Route {...this.props} />;
		} else if (requestStore.getRequestByType(requestTypes.SESSION)) {
			return <div>Loading...</div>;
		}

		return <Redirect to='/login' />;
	}
}
