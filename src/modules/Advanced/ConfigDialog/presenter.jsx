import React from 'react';
import { observer } from 'mobx-react';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import { BaseCard } from 'components';

import ViewTable from './ViewTable';


const DialogWrapper = (props) => {
	const {
		open,
		onClose,
		title,
		children
	} = props;

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby='form-dialog-title'
		>
			<DialogTitle id='form-dialog-title'>{title}</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
		</Dialog>
	);
}

@observer
export default class Presenter extends React.Component {
	render() {
		const { viewConfigStore, editConfigStore } = this.props;

		return (
			<BaseCard
				title='Test'
				subheader='Test'
				actions={
					<CardActions>
						<Button
							size='small'
							color='primary'
							onClick={() => viewConfigStore.setOpen(true)}
						>
							View
						</Button>
						<Button
							size='small'
							color='primary'
							onClick={() => editConfigStore.setOpen(true)}
						>
							Edit
						</Button>
					</CardActions>
				}
			>
				<DialogWrapper
					open={viewConfigStore.open}
					onClose={() => viewConfigStore.setOpen(false)}
					title='View Configuration File'
				>
					<ViewTable store={viewConfigStore} />
				</DialogWrapper>
				<DialogWrapper
					open={editConfigStore.open}
					onClose={() => editConfigStore.setOpen(false)}
					title='Edit Configuration File'
				>
					<div>HI</div>
				</DialogWrapper>
			</BaseCard>
		);
	}
}