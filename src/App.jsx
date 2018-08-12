import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { Login } from 'modules';
import { ProtectedRoute, Snackbar } from 'components';
import lightTheme from 'themes/lightTheme';


export default class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={createMuiTheme(lightTheme)}>
				<div id='app-inner'>
					<div className='preloaderbar hide'>
						<span className='bar' />
					</div>
					<div className='app-main full-height fixed-header sidebar-sm'>
						<Switch>
							<Route exact path='/login' component={Login} />
							<ProtectedRoute path='/app' component={<div />} />
						</Switch>
					</div>
					<Snackbar />
				</div>
			</MuiThemeProvider>
		);
	}
}
