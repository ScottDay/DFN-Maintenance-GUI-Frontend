import { action, observable } from 'mobx';


export default class Store {
	@observable open = false;

	@action.bound
	setOpen(open) {
		this.open = open;
	}
}
