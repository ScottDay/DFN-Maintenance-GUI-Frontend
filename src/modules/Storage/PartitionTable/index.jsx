import React from 'react';
import { observer } from 'mobx-react';

import Paper from '@material-ui/core/Paper';
import {
	GroupingState,
	IntegratedGrouping
} from '@devexpress/dx-react-grid';
import {
	Grid,
	Table,
	TableColumnResizing,
	TableHeaderRow,
	TableGroupRow
} from '@devexpress/dx-react-grid-material-ui';


@observer
export default class PartitionTable extends React.Component {
	render() {
		const { rows, config } = this.props;

		return (
			<Paper>
				<Grid
					rows={rows}
					columns={config.columns}
				>
					<GroupingState
						grouping={config.grouping}
						defaultExpandedGroups={config.defaultExpandedGroups}
					/>
					<IntegratedGrouping />
					<Table />
					<TableColumnResizing defaultColumnWidths={config.defaultColumnWidths} />
					<TableHeaderRow />
					<TableGroupRow />
				</Grid>
			</Paper>
		);
	}
}
