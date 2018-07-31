import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import classnames from 'classnames';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import grayTheme from './themes/grayTheme';

import MainApp from '../routes/app/';
import PageLogin from '../routes/login/';

import '../styles/bootstrap.scss';
import '../styles/layout.scss';
import '../styles/theme.scss';
import '../styles/ui.scss';
import '../styles/app.scss';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            match, location, layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth, theme
        } = this.props;
        let materialUITheme;

        switch (theme) {
            case 'gray':
                materialUITheme = grayTheme;
                break;
            case 'dark':
                materialUITheme = darkTheme;
                break;
            default:
                materialUITheme = lightTheme;
        }

        const isRoot = location.pathname === '/' ? true : false;

        if (isRoot) {
            return (<Redirect to={'/app/dashboard'} />);
        }

        return (
            <MuiThemeProvider theme={createMuiTheme(materialUITheme)}>
                <div id='app-inner'>
                    <div className='preloaderbar hide'>
                        <span className='bar' />
                    </div>
                    <div
                        className={classnames('app-main full-height', {
                            'fixed-header': fixedHeader,
                            'nav-collapsed': navCollapsed,
                            'nav-behind': navBehind,
                            'layout-boxed': layoutBoxed,
                            'theme-gray': theme === 'gray',
                            'theme-dark': theme === 'dark',
                            'sidebar-sm': sidebarWidth === 'small',
                            'sidebar-lg': sidebarWidth === 'large'
                        })
                        }
                    >
                        <Switch>
                            <Route path={`${match.url}app`} component={MainApp} />
                            <Route exact path='/login' component={PageLogin} />
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
