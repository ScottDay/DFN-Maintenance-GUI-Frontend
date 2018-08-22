import React from 'react';
import { observer } from 'mobx-react';

import Presenter from './presenter';
import Store from './store';


@observer
export default class CollapsibleCard extends React.Component {
	constructor(props) {
		super(props);

		this.store = new Store();
	}

	render() {
		const {
			children,
			...other
		} = this.props;

		return (
			<Presenter
				open={this.store.open}
				onClick={this.store.toggleOpen}
				{...other}
			>
				{children}
			</Presenter>
		);
	}
}
