import { action, observable } from 'mobx';


class Store {
	@observable initialStatus = false;
	@observable status = false;

	@action.bound
	setInitialStatus(status) {
		this.status = status;
		this.initialStatus = true;
	}

	@action.bound
	setStatus(status) {
		this.status = status;
	}
}


export default new Store();
