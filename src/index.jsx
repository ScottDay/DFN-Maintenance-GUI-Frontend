import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { configure } from 'mobx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import 'styles/main';
import { PageNotFound, Login } from 'modules';
import lightTheme from 'themes/lightTheme';
import { ProtectedRoute, Snackbar } from 'components';
import { historyService } from 'services';
import { appRoutes } from 'routes';

import App from './App';


configure({
	enforceActions: true
});

render(
	<MuiThemeProvider theme={createMuiTheme(lightTheme)}>
		<Router history={historyService}>
			<div id='app-inner'>
				<div className='preloaderbar hide'>
					<span className='bar' />
				</div>
				<div className='app-main full-height fixed-header sidebar-sm'>
					<Switch>
						<Route
							exact
							path='/login'
							component={Login}
						/>
						<ProtectedRoute
							path='/app'
							render={(props) => <App routes={appRoutes} path={props.match.path} />}
						/>
						<Route
							exact
							path='/'
							render={() => <Redirect to='/app' />}
						/>
						<Route
							path='/404'
							component={PageNotFound}
						/>
						<Route component={PageNotFound} />
					</Switch>
				</div>
				<Snackbar />
			</div>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('app-container')
);


if (module.hot) {
	module.hot.accept();

	/* window.addEventListener('message', () => {
		if ('production' !== process.env.config) {
			// eslint-disable-next-line no-console
			console.clear();
		}
	}); */
}
