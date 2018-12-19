import React from 'react';
import { observer } from 'mobx-react';

import { requestStore } from 'stores';
import { endpoints } from 'constants';

import store from './store';
import * as service from './service';
import Presenter from './presenter';


@observer
export default class DSLR extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		service.cameraStatus();
	}

	toggleCamera = () => {
		if (store.status) {
			service.cameraOff();
		} else {
			service.cameraOn();
		}
	}

	render() {
		if (store.initialStatus) {
			let label = 'Status: Off';

			if (requestStore.getRequestByType(endpoints.camera.dslr.on)
				|| requestStore.getRequestByType(endpoints.camera.dslr.on)) {
				label = 'Status: Loading...';
			} else if (store.status) {
				label = 'Status: On';
			}

			return (
				<Presenter
					store={store}
					label={label}
					toggleCamera={this.toggleCamera}
				/>
			);
		}

		return null;
	}
}
