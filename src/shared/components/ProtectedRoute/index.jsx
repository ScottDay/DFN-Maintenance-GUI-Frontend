import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { sessionAction } from '../../actions';
import { requestTypes } from '../../constants';


@inject('sessionStore', 'requestStore')
@observer
export default class ProtectedRoute extends React.Component {
	constructor(props) {
		super(props);
		sessionAction.authenticate();
	}

	render() {
		const { sessionStore, requestStore } = this.props;

		if (requestStore.getRequestByType(requestTypes.SESSION)) {
			return <div>Loading...</div>;
		} else if (sessionStore.authenticated) {
			return <Route {...this.props} />;
		}

		return <Redirect to='/login' />;
	}
}
