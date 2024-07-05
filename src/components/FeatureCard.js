import React from 'react';

export default function FeatureCard({ src, title, desc }) {
	return (
		<div className="feature-card">
			<img
				className="feature-card-img mb-2"
				src={src}
			/>
			<h3 className="feature-card-title mb-1">
				{title}
			</h3>
			<p className="feature-card-desc">
				{desc}
			</p>
		</div>
	);
}