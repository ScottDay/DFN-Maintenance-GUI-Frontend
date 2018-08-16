import React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';


export default class IconButtonWrapper extends React.Component {
	render() {
		const { onClick, icon } = this.props;

		const StyledIcon = styled(icon)`
			font-size: 20;
		`;

		return (
			<IconButton
				color='inherit'
				onClick={onClick}
			>
				<StyledIcon />
			</IconButton>
		);
	}
}
