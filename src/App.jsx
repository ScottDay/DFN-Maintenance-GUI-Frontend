import React from 'react';

import { Sidenav, Header } from 'components';


export default class App extends React.Component {
	render() {
		return (
			<div className='main-app-container'>
				<Sidenav />

				<section className='app-page-container'>
					<Header />
				</section>
			</div>
		);
	}
}
