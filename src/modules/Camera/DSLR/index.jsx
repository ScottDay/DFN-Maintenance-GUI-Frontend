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
			// eslint-disable-next-line
			console.log('Camera Off');

			service.cameraOff();
		} else {
			// eslint-disable-next-line
			console.log('Camera On');

			service.cameraOn();
		}
	}

	render() {
		// eslint-disable-next-line
		console.log(`initialStatus: ${store.initialStatus}`);

		// eslint-disable-next-line
		console.log(`status: ${store.status}`);

		if (store.initialStatus) {
			let label = 'Status: Off';

			if (requestStore.getRequestByType(endpoints.camera.dslr)) {
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
