import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { BaseCard } from 'components';


@observer
export default class Presenter extends React.Component {
	render() {
		const {
			store,
			label,
			toggleCamera
		} = this.props;

		return (
			<Grid item xs>
				<BaseCard basic title='DSLR Camera'>
					<FormControlLabel
						label={label}
						control={
							<Switch
								checked={store.status}
								onClick={toggleCamera()}
							/>
						}
					/>
				</BaseCard>
			</Grid>
		);
	}
}
