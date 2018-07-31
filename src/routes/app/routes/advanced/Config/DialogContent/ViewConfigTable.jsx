import React from 'react';
import Paper from 'material-ui/Paper';
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


class ViewConfigTable extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    name: 'category',
                    title: 'Category'
                },
                {
                    name: 'field',
                    title: 'Field'
                },
                {
                    name: 'value',
                    title: 'Value'
                }
            ],
            defaultColumnWidths: [
                {
                    columnName: 'category',
                    width: 130
                },
                {
                    columnName: 'field',
                    width: 170
                },
                {
                    columnName: 'value',
                    width: 319
                }
            ]
        };
    }

    componentDidMount() {
        this.props.configFile();
    }

    render() {
        const {
            columns,
            defaultColumnWidths
        } = this.state;
        const { rows } = this.props;

        return (
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <GroupingState grouping={[{ columnName: 'category' }]} />
                    <IntegratedGrouping />
                    <Table />
                    <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
                    <TableHeaderRow />
                    <TableGroupRow />
                </Grid>
            </Paper>
        );
    }
}

export default ViewConfigTable;
