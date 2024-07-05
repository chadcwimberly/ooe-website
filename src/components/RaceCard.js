import React from 'react';

export default function RaceCard({ src, title, desc }) {
	return (
		<div className="race-card">
			<img
				className="race-card-img mb-2"
				src={src}
			/>
			<h3 className="race-card-title mb-1">
				{title}
			</h3>
			<p className="race-card-desc">
				{desc}
			</p>
		</div>
	);
}