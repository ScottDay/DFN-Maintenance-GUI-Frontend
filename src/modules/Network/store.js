import { action, computed, observable } from 'mobx';


export default class Store {
	@observable summary = null;
	@observable output = null;

	@action.bound
	setSummary(summary) {
		this.summary = summary;
	}

	@action.bound
	setOutput(output) {
		this.output = output;
	}

	@computed
	get shouldDisplayContent() {
		let result = false;

		if (this.output && this.output.length > 0) {
			result = true;
		}

		return result;
	}
}
