import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import reduxStore from './stores';
import App from './containers/App';
import Page404 from './routes/404';

const history = createHistory();
const store = reduxStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' component={App} />
                <Route component={Page404} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);
