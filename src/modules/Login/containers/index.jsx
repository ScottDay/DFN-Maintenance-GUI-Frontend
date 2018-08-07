import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { sessionStore } from '../../../shared/stores';


@observer
export default class LoginContainer extends React.Component {
	handleKeyPress(event) {
		const {	loginService, loginStore } = this.props;

		if (event.key === 'Enter' && !loginStore.isDisabled()) {
			loginService.login(loginStore.username, loginStore.password)
		}
	}

	render() {
		const {	loginService, loginStore } = this.props;

		return (
			// eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
										onChange={(e) => loginStore.setUsername(e.target.value)}
										fullWidth
									/>
									<TextField
										placeholder='Password'
										type='password'
										onChange={(e) => loginStore.setPassword(e.target.value)}
										fullWidth
									/>
								</div>
							</fieldset>
						</form>
					</div>
					<div className='card-action no-border text-right'>
						<Button
							variant='raised'
							disabled={loginStore.isDisabled}
							onClick={() => loginService.login(loginStore.username, loginStore.password)}
						>
							Login
						</Button>
					</div>
				</div>

				<div className='additional-info'>
					<a href='https://wiki.dfn.net.au/index.php/Getting_Help' target='_blank'>
						Forgot your login or password?
					</a>
				</div>
			</div>
		);
	}
}
