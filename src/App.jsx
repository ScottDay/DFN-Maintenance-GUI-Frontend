import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Sidenav, Header, Footer } from 'components';


export default class App extends React.Component {
	render() {
		const { routes, path } = this.props;

		return (
			<div className='main-app-container'>
				<Sidenav />

				<section className='app-page-container'>
					<Header />

					<div className='app-content-wrapper'>
						<div className='app-content'>
							<div className='full-height'>
								<Switch>
									{routes.map((prop) => (
										<Route
											exact
											path={`${path}${prop.path}`}
											key={prop.name}
											component={prop.component}
										/>
									))}
									<Redirect
										from={`${path}`}
										to='/404'
									/>
								</Switch>
							</div>
						</div>

						<Footer />
					</div>
				</section>
			</div>
		);
	}
}
