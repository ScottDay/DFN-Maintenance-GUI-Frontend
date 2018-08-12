import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { configure } from 'mobx';

import 'styles/main';

import PageNotFound from './modules/PageNotFound';
import App from './App';


configure({
	enforceActions: true
});

render(
	<HashRouter>
		<Switch>
			<Route path='/' component={App} />
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
