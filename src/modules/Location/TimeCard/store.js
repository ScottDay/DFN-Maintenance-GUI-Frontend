import { action, observable } from 'mobx';


class Store {
	@observable open = false;

	@observable local = '';
	@observable utc = '';
	@observable rtc = '';
	@observable timezone = 0;

	@action.bound
	setOpen(open) {
		this.open = open;
	}

	@action.bound
	setTime(time, index) {
		this.local = time.local;
		this.utc = time.utc;
		this.rtc = time.rtc;
		this.timezone = index;
	}

	@action.bound
	setTimezone(timezone) {
		this.timezone = timezone;
	}
}


export default new Store();
