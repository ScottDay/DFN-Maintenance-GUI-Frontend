import React from 'react';
import { observer } from 'mobx-react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { timezones } from 'constants';


@observer
export default class TimezonePicker extends React.Component {
	render() {
		const { store, updateTimezone } = this.props;

		return (
			<div>
				<List component='nav'>
					<ListItem
						button
						aria-haspopup='true'
						aria-controls='lock-menu'
						aria-label='Timezone'
						onClick={() => store.setOpen(true)}
					>
						<ListItemText
							primary='Timezone'
							secondary={timezones[store.timezone].value}
						/>
					</ListItem>
				</List>
				<Menu
					id='lock-menu'
					open={store.open}
					onClose={() => store.setOpen(false)}
				>
					{timezones.map((timezone, index) => (
						<MenuItem
							key={timezone.key}
							disabled={index === 0}
							selected={index === store.timezone}
							onClick={() => updateTimezone(timezone.key, index)}
						>
							{timezone.value}
						</MenuItem>
					))}
				</Menu>
			</div>
		);
	}
}
