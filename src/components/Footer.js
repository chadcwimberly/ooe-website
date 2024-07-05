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
				<p className="text--inverse text--center">
					&copy; 2024 Chris DeTraglia and Chad Wimberly
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
