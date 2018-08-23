import React from 'react';

import { Page } from 'components';

import ConfigDialog from './ConfigDialog';


export default class Advanced extends React.Component {
	render() {
		return (
			<Page title='Advanced'>
				{/* Update buttons (python software, leostick firmware, maintenance gui) */}

				<ConfigDialog />
			</Page>
		);
	}
}
