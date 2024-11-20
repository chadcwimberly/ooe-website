import React from 'react';

export default function BuyTheBook() {
	return (
		<div className="buy-the-book-section">
			<div className="container">
				<div className="grid-2 sm-grid-2">
					<div className="buy-the-book-desc pl-10vw">
						<h1 className="buy-the-book-title mb-1-5">
							Start your journey today
						</h1>
						<p className="mb-1-5 text--lg">
							The 250-page Order of Eventide gamebook is printed in beautiful Premium Color. Delve into the world of Valeria with everything you need to play including starter heroes, blank sheets, and even gameplay and roleplay variants.
						</p>
						<a className="button buy-the-book-button" href="https://a.co/d/5Go3uvh">Buy Now on Amazon</a>
					</div>
					<div
						className="buy-the-book-img"
					></div>
				</div>
			</div>
		</div>
	);
}