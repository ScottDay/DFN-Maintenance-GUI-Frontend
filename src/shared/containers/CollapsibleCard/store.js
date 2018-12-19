import { action, observable } from 'mobx';


export default class Store {
	@observable open = false;

	@action.bound
	toggleOpen() {
		this.open = !this.open;
	}
}
