import { action, observable } from 'mobx';


export default class Store {
	@observable open = false;
	@observable rows = [
		{
			id: 0,
			category: 'Advanced',
			field: 'IP Address',
			value: '192.168.0.1'
		},
		{
			id: 1,
			category: 'Advanced',
			field: 'Hostname',
			value: 'scottydevil'
		},
		{
			id: 2,
			category: 'Test',
			field: 'Test',
			value: 'Test'
		}
	];

	@action.bound
	setOpen(open) {
		this.open = open;
	}

	@action.bound
	setRows(rows) {
		this.rows = rows;
	}
}
