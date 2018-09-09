import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';


const StyledGrid = styled(Grid)`
	padding: 12px 24px 12px 24px;
`;

@observer
export default class Timestamps extends React.Component {
	render() {
		const { store } = this.props;

		return (
			<StyledGrid container>
				<Grid item sm={12} md={4}>
					Local: {store.local}
				</Grid>

				<Grid item sm={12} md={4}>
					UTC: {store.utc}
				</Grid>

				<Grid item sm={12} md={4}>
					RTC: {store.rtc}
				</Grid>
			</StyledGrid>
		);
	}
}
