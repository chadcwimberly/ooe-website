import React from 'react';

export default function RegionCard({ src, title }) {
	return (
		<div className="region-card">
			<img
				className="region-card-img"
				src={src}
			/>
			<h3 className="region-card-title">
				{title}
			</h3>
		</div>
	);
}