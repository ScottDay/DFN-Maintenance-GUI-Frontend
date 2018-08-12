import React from 'react';
import styled from 'styled-components';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';

import { IconButtonWrapper } from 'components';


/* eslint-disable prefer-destructuring */
const StyledSnackbarContent = styled(SnackbarContent)`
	flex-wrap: nowrap !important;
	background-color: ${(props) => {
		let color = null;

		switch (props.type) {
			case 'info': color = blue[600]; break;
			case 'success': color = green[600]; break;
			case 'warning': color = amber[700]; break;
			case 'error': color = red[700];
		}

		return color;
	}} !important;
`;
/* eslint-enable prefer-destructuring */

const StyledSpan = styled.span`
	display: flex;
	align-items: center;
	white-space: pre-line;
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
	determineAction(action, renderClose, onClose) {
		let result = [];
		const close = (
			<IconButtonWrapper
				key='close'
				onClick={onClose}
				icon={CloseIcon}
			/>
		);

		if (!action) { // No action given.
			result.push(close);
		} else if (renderClose) { // Action given, still want default button.
			result.push(action);
			result.push(close);
		} else { // Use only provided actions.
			result = action;
		}

		return result;
	}

	determineIconType(type) {
		let Icon = null;

		switch (type) {
			case 'info': Icon = StyledInfoIcon; break;
			case 'success': Icon = StyledCheckCircleIcon; break;
			case 'warning': Icon = StyledWarningIcon; break;
			case 'error': Icon = StyledErrorIcon;
		}

		return Icon;
	}

	render() {
		const {
			isOpen, content, anchorOrigin, onClose
		} = this.props;

		const {
			type, duration, message
		} = content;

		const action = this.determineAction(this.props.action, this.props.renderClose, onClose);
		const Icon = this.determineIconType(type);

		return (
			<Snackbar
				open={isOpen}
				autoHideDuration={duration}
				anchorOrigin={anchorOrigin}
				onClose={onClose}
			>
				<StyledSnackbarContent
					type={type}
					onClose={onClose}
					message={
						<StyledSpan>
							<Icon />
							{message}
						</StyledSpan>
					}
					action={action}
				/>
			</Snackbar>
		);
	}
}
