import React from 'react';
import './_ResourceCard.scss';
import ImageDownload from "../resources/icon-download.svg";

export default function ResourceCard({ src, title, link }) {
	return (
		<div className="resource-card">
			<a className="resource-card-img-wrapper" href={link} target="_blank">
				<div
					className="resource-card-img mb-1-5"
					style={{ backgroundImage: `url(${src})` }}
				/>
				<img className="resource-card-hover-download" src={ImageDownload} alt="Download" />
			</a>
			<h3 className="resource-card-title mb-1">
				{title}
			</h3>
			<a className="button resource-card-download" href={link} target="_blank">
				Download
				<img className="resource-card-download-img" src={ImageDownload} alt="Download" />
			</a>
		</div>
	);
}