import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { observer } from 'mobx-react';

import { sessionAction } from '../../actions';
import { requestTypes } from '../../constants';
import { sessionStore, requestStore } from '../../stores';


@observer
export default class ProtectedRoute extends React.Component {
	constructor(props) {
		super(props);
		sessionAction.authenticate();
	}

	render() {
		if (requestStore.getRequestByType(requestTypes.SESSION)) {
			return <div>Loading...</div>;
		} else if (sessionStore.authenticated) {
			return <Route {...this.props} />;
		}

		return <Redirect to='/login' />;
	}
}
