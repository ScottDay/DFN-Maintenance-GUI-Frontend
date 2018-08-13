import React from 'react';

import { Sidenav, Header, Footer } from 'components';


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
								<div />
							</div>
						</div>

						<Footer />
					</div>
				</section>
			</div>
		);
	}
}
