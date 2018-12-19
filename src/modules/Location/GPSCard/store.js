import { action, observable } from 'mobx';


class Store {
	@observable lock = '';
	@observable satellites = 0;
	@observable altitude = '';
	@observable latitude = '';
	@observable longitude = '';

	@action.bound
	setGPS(gps) {
		this.lock = gps.lock;
		this.satellites = gps.satellites;
		this.altitude = gps.altitude;
		this.latitude = gps.latitude;
		this.longitude = gps.longitude;
	}
}


export default new Store();
