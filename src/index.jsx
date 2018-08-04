import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import * as stores from './shared/stores';
import ProtectedRoute from './shared/components/ProtectedRoute';
import App from './App';
import Login from './modules/Login/index';


configure({
	enforceActions: true
});

render(
	<Provider {...stores}>
		<HashRouter>
			<Switch>
				<Route exact path='/login' component={Login} />
				{/* 404 page */}
				<ProtectedRoute path='/' component={App} />
			</Switch>
		</HashRouter>
	</Provider>,
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
