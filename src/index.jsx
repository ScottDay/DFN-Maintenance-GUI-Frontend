import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import * as stores from './shared/stores';
import App from './App.jsx';
import Login from './modules/login/index.jsx';


configure({
    enforceActions: true
});

render(
    <Provider {...stores}>
        <HashRouter>
			<Switch>
				<Redirect exact from='/' to='app' />
				<Route path='/app' component={App} />
				<Route path='/login' component={Login} />
				{/* 404 page */}
			</Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app-container')
);

if (module.hot) {
	module.hot.accept();

	if (process.env.NODE_ENV === 'dev') {
		console.clear();
	}
}
