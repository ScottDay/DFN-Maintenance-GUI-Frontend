import React from 'react';

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


export default class ViewTable extends React.Component {
	render() {
		const { rows, tableConfig } = this.props;

		return (
			<Paper>
				<Grid
					rows={rows}
					columns={tableConfig.columns}
				>
					<GroupingState grouping={[{ columnName: 'category' }]} />
					<IntegratedGrouping />
					<Table />
					<TableColumnResizing defaultColumnWidths={tableConfig.defaultColumnWidths} />
					<TableHeaderRow />
					<TableGroupRow />
				</Grid>
			</Paper>
		);
	}
}
