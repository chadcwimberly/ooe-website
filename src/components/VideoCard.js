import React from 'react';
import './_VideoCard.scss';
import ImagePlay from "../resources/icon-play.svg";

export default function VideoCard({ src, title, link }) {
	return (
		<div className="video-card">
			<a
				className="video-card-img-wrapper"
				href={link} target="_blank"
			>
				<div
					className="video-card-img mb-1-5"
					style={{ backgroundImage: `url(${src})` }}
				/>
				<img className="video-card-hover-play" src={ImagePlay} alt="Play" />
			</a>
			<h3 className="video-card-title mb-1">
				{title}
			</h3>
			{/* <a className="button video-card-download" href={link} target="_blank">
				Download
				<img className="video-card-download-img" src={ImageDownload} alt="Download" />
			</a> */}
		</div>
	);
}