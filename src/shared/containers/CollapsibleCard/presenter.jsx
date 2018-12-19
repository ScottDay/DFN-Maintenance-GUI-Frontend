import React from 'react';
import styled from 'styled-components';

import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { BaseCard } from 'components';


const StyledIconButton = styled(IconButton)`
	&:focus {
		outline: none;
	}
`


export default class Presenter extends React.Component {
	render() {
		const {
			title,
			subheader,
			disabled,
			onClick,
			summary,
			actions,
			children
		} = this.props;

		let { open } = this.props;

		if (disabled && open) {
			open = false;
		}

		const tooltipTitle = open ? 'Collapse' : 'Expand';

		return (
			<BaseCard
				title={title}
				subheader={subheader}
				action={
					<div>
						<Tooltip title={tooltipTitle} disableFocusListener>
							<div>
								<StyledIconButton
									disabled={disabled}
									onClick={() => onClick()}
								>
									{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
								</StyledIconButton>
							</div>
						</Tooltip>
					</div>
				}
				summary={summary}
				actions={actions}
			>
				<Collapse in={open} timeout='auto' unmountOnExit>
					<Divider />
					<CardContent>
						{children}
					</CardContent>
				</Collapse>
			</BaseCard>
		);
	}
}
