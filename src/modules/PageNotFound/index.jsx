import React from 'react';
import Styled from 'styled-components';

import Button from '@material-ui/core/Button';

import CodingCatImage from 'assets/coding-cat';


const StyledDiv = Styled.div`
	top: 50%;
	left: 50%;
	color: white;
`;

export default class PageNotFound extends React.Component {
	componentDidMount() {
		const body = document.getElementById('body');

		body.style.backgroundImage = `url(${CodingCatImage})`;
		body.style.backgroundSize = 'cover';
		body.style.backgroundPosition = 'center center';
		body.style.backgroundRepeat = 'no-repeat';
		body.style.height = '100vh';
		body.style.margin = '0';
		body.style.padding = '0';
		body.style.width = '100vw';
	}

	componentWillUnmount() {
		const body = document.getElementById('body');

		body.style.backgroundImage = null;
		body.style.backgroundSize = null;
		body.style.backgroundPosition = null;
		body.style.backgroundRepeat = null;
		body.style.height = null;
		body.style.margin = null;
		body.style.padding = null;
		body.style.width = null;
	}

	render() {
		return (
			<StyledDiv>
				<center>
					<h2>Oh no, seems like you have lost your way!</h2>
					<h3>Click the button below to navigate back to the home page...</h3>
					<Button
						size='small'
						color='primary'
						onClick={() => this.props.history.push('/')}
					>
						Back to Homepage
					</Button>
				</center>
			</StyledDiv>
		);
	}
}
