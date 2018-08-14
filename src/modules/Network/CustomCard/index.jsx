import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import LaunchIcon from '@material-ui/icons/Launch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import Store from './store';


const StyledCardHeader = styled(CardHeader)`
	& :nth-child(2)	{
		margin-top: 0px;

		> div {
			display: flex;
		}
	}
`;

const StyledTypography = styled(Typography)`
	white-space: pre-line;
`;

const StyledIconButton = styled(IconButton)`
	&:focus {
		outline: none;
	}
`


@observer
export default class CustomCard extends React.Component {
	constructor(props) {
		super(props);

		this.store = new Store();
	}

	render() {
		const { title, subheader, onClickHandler } = this.props;

		return (
			<Card>
				<StyledCardHeader
					title={title}
					subheader={subheader}
					action={
						<div>
							<Tooltip title='Execute Command' disableFocusListener>
								<StyledIconButton onClick={() => onClickHandler(this.store)}>
									<LaunchIcon />
								</StyledIconButton>
							</Tooltip>
							<Tooltip title='View Output' disableFocusListener>
								<div>
									<StyledIconButton
										disabled={!this.store.canDisplayContent}
										onClick={() => this.store.toggleIsOpen()}
									>
										{this.store.isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
									</StyledIconButton>
								</div>
							</Tooltip>
						</div>
					}
				/>
				<Divider />
				{this.store.shouldDisplaySummary ?
					<CardContent>
						<StyledTypography component='p'>
							{this.store.summary}
						</StyledTypography>
					</CardContent>
					: null
				}
				<Collapse in={this.store.isOpen} timeout='auto' unmountOnExit>
					<Divider />
					<CardContent>
						<StyledTypography paragraph>
							{this.store.message}
						</StyledTypography>
					</CardContent>
				</Collapse>
			</Card>
		);
	}
}
