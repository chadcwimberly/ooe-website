import React from 'react';

export default function BuyTheBook() {
	return (
		<div className="buy-the-book-section">
			<div className="container">
				<div className="grid-2 sm-grid-2">
					<div className="buy-the-book-desc pl-10vw">
						<h1 className="buy-the-book-title mb-1-5">
							Buy the Gamebook
						</h1>
						<p className="mb-1-5 text--lg">
							Start your journey today!
						</p>
						<a className="button buy-the-book-button" href="#">Buy Now on Amazon</a>
					</div>
					<div
						className="buy-the-book-img"
					></div>
				</div>
			</div>
		</div>
	);
}