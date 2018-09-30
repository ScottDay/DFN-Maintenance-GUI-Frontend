import {
	action,
	computed,
	observable
} from 'mobx';


export default class Store {
	@observable summary = null;
	@observable log = null;

	@action.bound
	setSummary(summary) {
		this.summary = summary;
	}

	@action.bound
	setLog(log) {
		this.log = log;
	}

	@action.bound
	reset() {
		this.summary = null;
		this.log = null;
	}

	@computed
	get shouldDisplayContent() {
		let result = false;

		if (this.log && this.log.length > 0) {
			result = true;
		}

		return result;
	}
}
