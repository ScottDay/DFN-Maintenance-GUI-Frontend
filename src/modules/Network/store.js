import { action, computed, observable } from 'mobx';


class Store {
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

	@computed
	get shouldDisplaySummary() {
		return this.summary.length > 0;
	}

	@computed
	get canDisplayContent() {
		let result = false;

		if (this.isOpen && this.message && this.message.length > 0) {
			result = true;
		}

		return result;
	}
}


export default new Store();
