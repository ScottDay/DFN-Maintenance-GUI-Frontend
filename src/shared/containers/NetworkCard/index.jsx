import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import { CollapsibleCard } from 'containers';

import Store from './store';


const StyledTypography = styled(Typography)`
	white-space: pre-line;
`;


@observer
export default class NetworkCard extends React.Component {
	constructor(props) {
		super(props);

		this.store = new Store();
	}

	render() {
		const {
			title,
			subheader,
			onClick
		} = this.props;

		// TODO: Disable when making network request.
		return (
			<CollapsibleCard
				title={title}
				subheader={subheader}
				disabled={!this.store.shouldDisplayContent}
				actions={
					<CardActions>
						<Button
							size='small'
							color='primary'
							onClick={() => onClick(this.store)}
						>
							Execute
						</Button>
						{this.store.summary ?
							<div>
								{this.store.summary}
							</div>
							: null
						}
					</CardActions>
				}
			>
				<StyledTypography paragraph>
					{this.store.log}
				</StyledTypography>
			</CollapsibleCard>
		);
	}
}
