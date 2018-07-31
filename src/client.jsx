import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import App from './containers/App';

const history = createHistory();
const store = reduxStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-container')
);
