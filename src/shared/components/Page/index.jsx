import React from 'react';


export default class Page extends React.Component {
	render() {
		const { title, children } = this.props;

		return (
			<div className='container-fluid with-maxwidth chapter'>
				<article className='article'>
					<h2 className='article-title'>
						{title}
					</h2>

					{children}
				</article>
			</div>
		);
	}
}
