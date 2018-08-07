import { observable, action } from 'mobx';


class RequestStore {
	@observable requests;

	constructor() {
		this.requests = observable.map({});
	}

	@action
	setRequestInProgress(requestType, inProcess) {
		this.requests.set(requestType, inProcess);
	}

	getRequestByType(type) {
		return this.requests.get(type);
	}
}

export default new RequestStore();
