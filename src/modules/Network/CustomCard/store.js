import { action, computed, observable } from 'mobx';


export default class Store {
	@observable isOpen = false;
	@observable summary = '';
	@observable message = '';

	@action.bound
	toggleIsOpen() {
		this.isOpen = !this.isOpen;
	}

	@action.bound
	setSummary(summary) {
		this.summary = summary;
	}

	@action.bound
	setMessage(message) {
		this.message = message;
	}

	@action.bound
	reset() {
		this.isOpen = false;
		this.summary = '';
		this.message = '';
	}

	@computed
	get shouldDisplaySummary() {
		let result = false;

		if (this.summary != null && this.summary.length > 0) {
			result = true;
		}

		return result;
	}

	@computed
	get canDisplayContent() {
		let result = false;

		if (this.message && this.message.length > 0) {
			result = true;
		}

		return result;
	}
}
