import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const StyledCardHeader = styled(CardHeader)`
	padding-bottom: 4px !important;

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

const CardSummary = (props) => {
	const { summary } = props;

	if (summary == null) {
		return null;
	}

	return (
		<div>
			<Divider />
			<CardContent>
				<StyledTypography component='p'>
					{summary}
				</StyledTypography>
			</CardContent>
			<Divider />
		</div>
	);
}


export default class BaseCard extends React.Component {
	render() {
		const {
			basic,
			title,
			subheader,
			action,
			summary,
			actions,
			children
		} = this.props;

		if (basic) {
			return (
				<Card>
					<CardHeader
						title={title}
						subheader={subheader}
					/>
					<CardContent>
						{children}
					</CardContent>
				</Card>
			);
		}

		return (
			<Card>
				<StyledCardHeader
					title={title}
					subheader={subheader}
					action={action}
				/>
				{actions}
				<CardSummary summary={summary} />
				{children}
			</Card>
		);
	}
}
