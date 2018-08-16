import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


@observer
export default class Presenter extends React.Component {
	handleKeyPress(event) {
		const {	service, store } = this.props;

		if (event.key === 'Enter' && !store.isDisabled) {
			service.login(store.username, store.password)
		}
	}

	render() {
		const {	service, store, sessionStore } = this.props;

		return (
			<div className='page-login'>
				<div className='main-body'>
					{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
					<div className='body-inner' onKeyPress={(event) => this.handleKeyPress(event)}>
						<div className='card bg-white'>
							<div className='card-content'>

								<section className='logo text-center'>
									<h1>Fireball Maintenance GUI</h1>
									<h6>{sessionStore.hostname}</h6>
								</section>

								<form className='form-horizontal'>
									<fieldset>
										<div className='form-group'>
											<TextField
												placeholder='Email'
												type='email'
												onChange={(e) => store.setUsername(e.target.value)}
												fullWidth
											/>
											<TextField
												placeholder='Password'
												type='password'
												onChange={(e) => store.setPassword(e.target.value)}
												fullWidth
											/>
										</div>
									</fieldset>
								</form>
							</div>
							<div className='card-action no-border text-right'>
								<Button
									variant='raised'
									disabled={store.isDisabled}
									onClick={() => service.login(store.username, store.password)}
								>
									Login
								</Button>
							</div>
						</div>

						<div className='additional-info'>
							{/* eslint-disable-next-line */}
							<a href='https://wiki.dfn.net.au/index.php/Getting_Help' target='_blank'>
								Forgot your login or password?
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
