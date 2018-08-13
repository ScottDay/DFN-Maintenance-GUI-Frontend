import React from 'react';
import { Link } from 'react-router-dom';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import StorageIcon from '@material-ui/icons/Storage';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import NetworkCellIcon from '@material-ui/icons/NetworkCell';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import Button from '@material-ui/core/Button';


// TODO: Highlight button that matches the current page (styled components).
export default class Presenter extends React.Component {
	render() {
		const { helpPage } = this.props;

		return (
			<nav className='app-sidebar'>
				{/* <section className='sidebar-header bg-color-info'> */}
				<section className='sidebar-header bg-color-danger'>
					<Link to='/' className='brand'>
						Maintenance GUI
					</Link>
				</section>

				<section className='sidebar-content'>
					<ul className='nav'>
						<li className='nav-header'>
							<span>Navigation</span>
						</li>

						<li className='nav-divider' />

						<li>
							<Button href='/'>
								<StorageIcon className='nav-icon' />
								<span className='nav-text'>
									Storage
								</span>
							</Button>
						</li>
						<li>
							<Button href='/camera'>
								<PhotoCameraIcon className='nav-icon' />
								<span className='nav-text'>
									Camera
								</span>
							</Button>
						</li>
						<li>
							<Button href='/network'>
								<NetworkCellIcon className='nav-icon' />
								<span className='nav-text'>
									Network
								</span>
							</Button>
						</li>
						<li>
							<Button href='/location'>
								<MyLocationIcon className='nav-icon' />
								<span className='nav-text'>
									Location
								</span>
							</Button>
						</li>
						<li>
							<Button href='/advanced'>
								<SettingsApplicationsIcon className='nav-icon' />
								<span className='nav-text'>
									Advanced
								</span>
							</Button>
						</li>

						<li className='nav-divider' />
					</ul>
				</section>

				<section className='sidebar-footer'>
					<ul className='nav'>
						<li>
							<Link to={helpPage}>
								<HelpOutlineIcon className='nav-icon'>
									help
								</HelpOutlineIcon>
								<span className='nav-text'>
									<span>Help</span> & <span>Support</span>
								</span>
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		);
	}
}
