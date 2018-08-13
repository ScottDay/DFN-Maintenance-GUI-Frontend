import React from 'react';

import { links } from 'constants';

import Presenter from './presenter';


export default class Sidenav extends React.Component {
	render() {
		return (
			<Presenter
				helpPage={links.HELP_PAGE}
			/>
		);
	}
}
