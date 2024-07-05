import React, { useRef } from 'react';
import './_Slider.scss';

import ImageChevronLeft from "../resources/chevron-left.svg";
import ImageChevronRight from "../resources/chevron-right.svg";

export default function Slider({ children }) {
	const parentRef = useRef(null);

	const handleClick = () => {
		parentRef.current.scrollTo({ left: 0, behavior: 'smooth' });
		console.log("scrolled left");
	};

	return (
			<div className="slider-wrapper" ref={parentRef}>
				<div className="slider-nav slider-nav--left" onclick={handleClick}>
					<img src={ImageChevronLeft} />
				</div>
				<div className="slider-nav slider-nav--right" onclick={handleClick}>
					<img src={ImageChevronRight} />
				</div>
				<div className="slider-inner">
					{children}
				</div>
			</div>
	);
};