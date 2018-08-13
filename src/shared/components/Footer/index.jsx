import React from 'react';

import { links } from 'constants';

import Presenter from './presenter';


export default class Footer extends React.Component {
	render() {
		return (
			<Presenter wikiPage={links.WIKI} />
		);
	}
}
