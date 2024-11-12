import './_Footer.scss';
import React from 'react';

class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			someKey: 'someValue'
		};
	}

	render() {
		return <footer className="footer-wrapper">
			<div className="footer">
				<p className="text--inverse text-center mb-1">
				Questions or comments? We'd love to hear from you! <a className="text-link text--inverse" href="mailto:contact@orderofeventide.com" target="_blank">contact@orderofeventide.com</a>
				</p>
				<p className="text--inverse text--center" style={{opacity: .5}}>
					&copy; 2024 Tidebreaker Games, LLC
				</p>
			</div>
		</footer>;
	}

	componentDidMount() {
		this.setState({
			someKey: 'otherValue'
		});
	}
}

export default Footer;
