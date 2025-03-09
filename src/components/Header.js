import './_Header.scss';
import React from 'react';

import ImageLogo from "../resources/order-of-eventide-logotype.svg";

class Header extends React.Component {

	render() {
		return <header className="header-wrapper">
			<div className="container">
				<div className="header-nav">
					<div className="header-nav-inner header-nav-inner--left">
						<a className="nav-item h4" href="/#features">
							Features
						</a>
						<a className="nav-item h4" href="/#regions">
							Regions
						</a>
						<a className="nav-item h4" href="/#systems">
							Systems
						</a>
						<a className="nav-item h4" href="/#races">
							Races
						</a>
					</div>
					<a className="home-link" href="/#home">
						<img src={ImageLogo} className="header-logotype" alt="Order of Eventide" />
					</a>
					<div className="header-nav-inner header-nav-inner--right">
						<a className="nav-item h4" href="/#classes">
							Classes
						</a>
						<a className="nav-item h4" href="/#artwork">
							Artwork
						</a>
						<a className="nav-item h4" href="/#resources">
							Resources
						</a>
						<a className="nav-button button button--small buy-the-book-button" href="https://a.co/d/5Go3uvh">
							Buy Now
						</a>
					</div>
				</div>
			</div>
		</header>;
	}
}

export default Header;
