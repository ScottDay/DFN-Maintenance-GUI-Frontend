import React from 'react';
import { observer } from 'mobx-react';

import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import {
	GroupingState,
	IntegratedGrouping
} from '@devexpress/dx-react-grid';
import {
	Grid as TableGrid,
	Table,
	TableColumnResizing,
	TableHeaderRow,
	TableGroupRow
} from '@devexpress/dx-react-grid-material-ui';


@observer
export default class PartitionTable extends React.Component {
	render() {
		const { store, config } = this.props;

		return (
			<Grid item xs={12}>
				<Paper>
					<TableGrid
						rows={store.rows}
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
					</TableGrid>
				</Paper>
			</Grid>
		);
	}
}
