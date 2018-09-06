import React from 'react';
import { observer } from 'mobx-react';

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


@observer
export default class DialogTable extends React.Component {
	// TODO[BUG]: Does not immediately refresh when a value has been updated (interact to manually refresh.
	commitChanges = ({ changed }) => {
		const { store, rows } = this.props;

		rows.map((row) => { // eslint-disable-line array-callback-return
			if (changed[row.id]) {
				const updatedRow = [row.category, row.field, changed[row.id].value.toString()];

				this.props.updateConfig(store, row.id, updatedRow);
			}
		});
	}

	render() {
		const { rows, config, edit } = this.props;

		if (edit) {
			return (
				<Paper>
					<Grid
						rows={rows}
						columns={config.columns}
					>
						<GroupingState grouping={config.grouping} />
						<IntegratedGrouping />
						<Table />
						<TableColumnResizing defaultColumnWidths={config.defaultColumnWidths} />
						<TableHeaderRow />
						<EditingState
							onCommitChanges={this.commitChanges}
							columnExtensions={config.editingStateColumnExtensions}
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
					columns={config.columns}
				>
					<GroupingState grouping={config.grouping} />
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
