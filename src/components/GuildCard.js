import React from 'react';

export default function GuildCard({ src, title, desc }) {
	return (
		<div className="guild-card">
			<img
				className="guild-card-img mb-2"
				src={src}
			/>
			<h3 className="guild-card-title mb-1">
				{title}
			</h3>
			<p className="guild-card-desc">
				{desc}
			</p>
		</div>
	);
}