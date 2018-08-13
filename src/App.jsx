import React from 'react';

import { Sidenav } from 'components';


export default class App extends React.Component {
	render() {
		return (
			<div className='main-app-container'>
				<Sidenav />
			</div>
		);
	}
}
