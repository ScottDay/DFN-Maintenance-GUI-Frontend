import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import ProtectedRoute from 'components/ProtectedRoute';
import lightTheme from 'themes/lightTheme';

import Login from './modules/Login';


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
				</div>
			</MuiThemeProvider>
		);
	}
}
