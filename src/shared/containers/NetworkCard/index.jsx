import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import { CollapsibleCard } from 'containers';


const StyledTypography = styled(Typography)`
	white-space: pre-line;
`;


@observer
export default class NetworkCard extends React.Component {
	render() {
		const {
			title,
			subheader,
			disabled,
			onClick,
			summary,
			output
		} = this.props;

		// TODO: Disable when making network request.
		return (
			<CollapsibleCard
				title={title}
				subheader={subheader}
				disabled={disabled}
				actions={
					<CardActions>
						<Button
							size='small'
							color='primary'
							onClick={() => onClick}
						>
							Execute
						</Button>
						{summary ?
							<div>
								{summary}
							</div>
							: null
						}
					</CardActions>
				}
			>
				<StyledTypography paragraph>
					{output}
				</StyledTypography>
			</CollapsibleCard>
		);
	}
}
