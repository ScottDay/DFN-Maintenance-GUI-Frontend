import React from 'react';
import { observer } from 'mobx-react';
import { Manager, Popper, Target } from 'react-popper';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';


const StyledButton = styled(Button)`
    height: inherit !important;
    padding-top: 18px !important;
    padding-bottom: 18px !important;
`;

const StyledMoreVertIcon = styled(MoreVertIcon)`
	color: #a1a1a1;
`;

const StyledMenuList = styled(MenuList)`
    height: inherit;
`;


@observer
export default class Presenter extends React.Component {
	render() {
		const { service, store } = this.props;

		return (
			<section className='app-header'>
				<div className='app-header-inner bg-color-dark'>
					<div className='top-nav-right'>
						<ClickAwayListener onClickAway={() => (store.isOpen ? store.setIsOpen(false) : null)}>
							<Manager>
								<Target>
									<StyledButton
										aria-owns={store.isOpen ? 'menu-list-grow' : null}
										aria-haspopup='true'
										onClick={() => (store.isOpen ? store.setIsOpen(false) : store.setIsOpen(true))}
									>
										<StyledMoreVertIcon />
									</StyledButton>
								</Target>
								<Popper
									placement='bottom-start'
									eventsEnabled={store.isOpen}
								>
									<Grow
										in={store.isOpen}
										id='menu-list-grow'
										style={{transformOrigin: '0 0 0'}}
									>
										<Paper>
											<StyledMenuList role='menu'>
												<MenuItem onClick={() => service.logout()}>
													Logout
												</MenuItem>
											</StyledMenuList>
										</Paper>
									</Grow>
								</Popper>
							</Manager>
						</ClickAwayListener>
					</div>
				</div>
			</section>
		);
	}
}
