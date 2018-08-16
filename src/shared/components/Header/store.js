import { action, observable } from 'mobx';


class Store {
	@observable isOpen = false;

	@action.bound
	setIsOpen(isOpen) {
		this.isOpen = isOpen;
	}
}


export default new Store();
