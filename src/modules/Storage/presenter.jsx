import React from 'react';
import { observer } from 'mobx-react';

import { Page } from 'components';

import PartitionTable from './PartitionTable';
import Commands from './Commands';


@observer
export default class Presenter extends React.Component {
	render() {
		return (
			<Page title='Storage'>
				<PartitionTable {...this.props} />
				<Commands />
			</Page>
		);
	}
}
