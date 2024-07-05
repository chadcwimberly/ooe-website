import './_Header.scss';
import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			someKey: 'someValue'
		};
	}

	render() {
		return <header className="header-wrapper">
			<div className="container">
				<div className="header-nav">
					<a className="nav-item h4" href="/#features">
						Features
					</a>
					<a className="nav-item h4" href="/#regions">
						Regions
					</a>
					<a className="nav-item h4" href="/#systems">
						Systems
					</a>
					<p className="header-logotype">Order of Eventide</p>
					<a className="nav-item h4" href="/#races">
						Races
					</a>
					<a className="nav-item h4" href="/#classes">
						Classes
					</a>
					<a className="nav-item h4" href="/#artwork">
						Artwork
					</a>
					<a className="nav-button button button--small" href="#">
						Buy Now
					</a>
				</div>
			</div>
		</header>;
	}

	componentDidMount() {
		this.setState({
			someKey: 'otherValue'
		});
	}
}

export default Header;
