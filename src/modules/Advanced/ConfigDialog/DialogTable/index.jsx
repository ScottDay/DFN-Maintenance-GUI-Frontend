import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
	GroupingState,
	IntegratedGrouping,
	EditingState
} from '@devexpress/dx-react-grid';
import {
	Grid,
	Table,
	TableColumnResizing,
	TableHeaderRow,
	TableGroupRow,
	TableEditRow,
	TableEditColumn
} from '@devexpress/dx-react-grid-material-ui';


export default class DialogTable extends React.Component {
	commitChanges = (changed) => {
		// eslint-disable-next-line
		console.log(changed);
	}

	render() {
		const { rows, tableConfig, edit } = this.props;

		if (edit) {
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
						<EditingState
							onCommitChanges={this.commitChanges}
							columnExtensions={tableConfig.editingStateColumnExtensions}
						/>
						<TableEditRow />
						<TableEditColumn
							showEditCommand
						/>
						<TableGroupRow />
					</Grid>
				</Paper>
			);
		}

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
