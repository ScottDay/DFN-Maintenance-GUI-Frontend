import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import * as stores from './shared/stores';
import App from './App.jsx';

configure({
    enforceActions: true
});

render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('app-container')
);

if (module.hot) {
	module.hot.accept();
}
