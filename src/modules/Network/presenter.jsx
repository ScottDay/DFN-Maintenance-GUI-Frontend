import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Page } from 'components';

import SideBySideCard from './SideBySideCard';


export default class Presenter extends React.Component {
	render() {
		const { sections } = this.props;

		return (
			<Page title='Network'>
				<Grid container spacing={24}>
					{sections.map((props) => {
						const { title, cards } = props;

						return (
							<Grid key={title} item xs={12} sm={12}>
								<SideBySideCard
									sectionTitle={title}
									cards={cards}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Page>
		);
	}
}
