import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { configure } from 'mobx';

import ProtectedRoute from './shared/components/ProtectedRoute';
import Login from './modules/Login';
import App from './App';
import PageNotFound from './modules/PageNotFound';


configure({
	enforceActions: true
});

render(
	<HashRouter>
		<Switch>
			<Route exact path='/login' component={Login} />
			<ProtectedRoute exact path='/' component={App} />
			<Route component={PageNotFound} />
		</Switch>
	</HashRouter>,
	document.getElementById('app-container')
);


if (module.hot) {
	module.hot.accept();

	/* window.addEventListener('message', () => {
		if ('production' !== process.env.NODE_ENV) {
			// eslint-disable-next-line no-console
			console.clear();
		}
	}); */
}
