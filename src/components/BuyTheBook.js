import React from 'react';

export default function BuyTheBook() {
	return (
		<div className="buy-the-book-section">
			<div className="container">
				<div className="grid-2">
					<div className="buy-the-book-desc">
						<h3 className="buy-the-book-title mb-1-5">
							Buy the Gamebook
						</h3>
						<p className="mb-1-5">
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