import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Sidenav, Header, Footer } from 'components';
import { Storage } from 'modules';


function CameraStub() {
	return (<div>CameraStub</div>);
}

function NetworkStub() {
	return (<div>NetworkStub</div>);
}

function LocationStub() {
	return (<div>LocationStub</div>);
}

function AdvancedStub() {
	return (<div>AdvancedStub</div>);
}


export default class App extends React.Component {
	render() {
		return (
			<div className='main-app-container'>
				<Sidenav />

				<section className='app-page-container'>
					<Header />

					<div className='app-content-wrapper'>
						<div className='app-content'>
							<div className='full-height'>
								<Switch>
									<Route path='/' component={Storage} />
									<Route path='/camera' component={CameraStub} />
									<Route path='/network' component={NetworkStub} />
									<Route path='/location' component={LocationStub} />
									<Route path='/advanced' component={AdvancedStub} />
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
