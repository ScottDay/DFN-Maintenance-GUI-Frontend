import React from 'react';

import { Page } from 'components';

import TimeCard from './TimeCard';


export default class Location extends React.Component {
	render() {
		return (
			<Page title='Location'>
				<TimeCard />
			</Page>
		);
	}
}
