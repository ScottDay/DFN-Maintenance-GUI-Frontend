import { action, observable } from 'mobx';


class Store {
	@observable rows = [
		{
			id: 0,
			status: '',
			device: '',
			total: '',
			used: '',
			free: '',
			percent: '',
			type: '',
			mount: ''
		}
	];

	@action.bound
	setRows(rows) {
		this.rows = rows;
	}
}

export default new Store();
