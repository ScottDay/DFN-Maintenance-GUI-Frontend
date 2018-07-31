import React from 'react';
import { Route } from 'react-router-dom';


class AuthenticatedRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        if (this.props.loading || !this.props.isAuthenticated) {
            return null;
        }

        return (
            <Route {...this.props} />
        );
    }
}

export default AuthenticatedRoute;
