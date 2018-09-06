import React from 'react';
import { observer } from 'mobx-react';

import { Page, BaseCard } from 'components';

import PartitionTable from './PartitionTable';


@observer
export default class Presenter extends React.Component {
	render() {
		const { store, config } = this.props;

		return (
			<Page title='Storage'>
				<BaseCard basic title='Drive Partitions'>
					<PartitionTable rows={store.rows} config={config} />
				</BaseCard>
			</Page>
		);
	}
}
