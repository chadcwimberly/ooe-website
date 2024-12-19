import React, { useRef, useState, useEffect } from 'react';
import './_Slider.scss';

import ImageChevronLeft from "../resources/icon-chevron-left.svg";
import ImageChevronRight from "../resources/icon-chevron-right.svg";

export default function Slider({ children }) {
	const parentRef = useRef(null);
	const [isLeftDisabled, setIsLeftDisabled] = useState(true);
	const [isRightDisabled, setIsRightDisabled] = useState(false);

	const handleClick = (direction) => {
		const { current } = parentRef;
		if (current) {
			const scrollAmount = current.clientWidth;

			if (direction === 'left') {
				current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
			} else if (direction === 'right') {
				current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
			}
		}
	};

	const updateNavButtonsState = () => {
		const { current } = parentRef;
		if (current) {
			setIsLeftDisabled(current.scrollLeft === 0);
			setIsRightDisabled(current.scrollLeft + current.clientWidth >= current.scrollWidth);
		}
	};

	useEffect(() => {
		const { current } = parentRef;
		if (current) {
			current.addEventListener('scroll', updateNavButtonsState);
			updateNavButtonsState();
		}
		return () => {
			if (current) {
				current.removeEventListener('scroll', updateNavButtonsState);
			}
		};
	}, []);

	return (
		<div className="slider-wrapper">
			<div className={`slider-nav slider-nav--left ${isLeftDisabled ? 'slider-nav--disabled' : ''}`} onClick={() => handleClick('left')}>
				<img className="slider-nav-img" src={ImageChevronLeft} alt="Scroll Left" />
			</div>
			<div className={`slider-nav slider-nav--right ${isRightDisabled ? 'slider-nav--disabled' : ''}`} onClick={() => handleClick('right')}>
				<img className="slider-nav-img" src={ImageChevronRight} alt="Scroll Right" />
			</div>
			<div className="slider-inner" ref={parentRef}>
				{children}
			</div>
		</div>
	);
};
