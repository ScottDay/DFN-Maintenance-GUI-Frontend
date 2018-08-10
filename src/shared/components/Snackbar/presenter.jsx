import React from 'react';
import styled from 'styled-components';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';


const StyledSnackbarContent = styled(SnackbarContent)`
	background-color: ${(props) => {
		let color = null;

		switch (props.type) {
			case 'success': color = green[600]; break;
			case 'warning': color = amber[700]; break;
			case 'error': color = red[700]; break;
			default: color = blue[600];
		}

		return color;
	}};
`;

const StyledSpan = styled.span`
	display: flex;
	align-items: center;
`;

const StyledCloseIcon = styled(CloseIcon)`
	font-size: 20;
`;

const StyledInfoIcon = styled(InfoIcon)`
	font-size: 20;
	opacity: 0.9;
	margin-right: 1em;
`;

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
	font-size: 20;
	opacity: 0.9;
	margin-right: 1em;
`;

const StyledWarningIcon = styled(WarningIcon)`
	font-size: 20;
	opacity: 0.9;
	margin-right: 1em;
`;

const StyledErrorIcon = styled(ErrorIcon)`
	font-size: 20;
	opacity: 0.9;
	margin-right: 1em;
`;

export default class Presenter extends React.Component {
	determineIconType(type) {
		let Icon = null;

		switch (type) {
			case 'success': Icon = StyledCheckCircleIcon; break;
			case 'warning': Icon = StyledWarningIcon; break;
			case 'error': Icon = StyledErrorIcon; break;
			default: Icon = StyledInfoIcon;
		}

		return Icon;
	}

	render() {
		const { type, message, onClose } = this.props;
		const Icon = this.determineIconType(type);

		return (
			<StyledSnackbarContent
				type={type}
				aria-describedby='client-snackbar'
				message={
					<StyledSpan id='client-snackbar'>
						<Icon />
						{message}
					</StyledSpan>
				}
				action={[
					<IconButton
						key='close'
						aria-label='Close'
						color='inherit'
						onClick={onClose}
					>
						<StyledCloseIcon />
					</IconButton>
				]}
			/>
		);
	}
}
