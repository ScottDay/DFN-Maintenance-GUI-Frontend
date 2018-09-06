import { action, observable } from 'mobx';


export default class Store {
	@observable open = false;
	@observable rows = [
		{
			id: 0,
			category: '',
			field: '',
			value: ''
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
