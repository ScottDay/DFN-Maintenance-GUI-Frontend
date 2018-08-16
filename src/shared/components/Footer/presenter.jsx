import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default class Presenter extends React.Component {
	render() {
		const { wikiPage } = this.props;

		return (
			<section className='app-footer'>
				<div className='container-fluid'>
					<span className='float-left'>
						<span>
							Copyright ©
							<Link to={wikiPage}	className='brand'>
								Fireballs in the Sky
							</Link>
							2018
						</span>
					</span>
					<span className='float-right'>
						<span>
							Built with Blood, Sweat & <FavoriteBorderIcon className='material-icons' />
						</span>
					</span>
				</div>
			</section>
		);
	}
}
