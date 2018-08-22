import React from 'react';
import { observer } from 'mobx-react';

import Grid from '@material-ui/core/Grid';

import { BaseCard } from 'components';
import NetworkCard from '../NetworkCard';


@observer
export default class SideBySideCard extends React.Component {
	render() {
		const { sectionTitle, cards } = this.props;

		return (
			<BaseCard basic title={sectionTitle}>
				<Grid container spacing={24}>
					{cards.map((props) => {
						const {
							title,
							subheader,
							store,
							onClick
						} = props;

						return (
							<Grid key={title} item xs={12} sm={12}>
								<NetworkCard
									title={title}
									subheader={subheader}
									disabled={!store.shouldDisplayContent}
									onClick={onClick}
									summary={store.summary}
									output={store.output}
								/>
							</Grid>
						);
					})}
				</Grid>
			</BaseCard>
		);
	}
}
