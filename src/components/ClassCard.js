import React from 'react';
import './_ClassCard.scss';

export default function ClassCard({ src, title, tier, desc }) {
    const tierClassName = `class-tier class-tier--${tier} mb-1`;
	const altText = `${title} Class Image`

    return (
        <div className="class-card">
            <img
                className="class-card-img mb-2"
                src={src}
                alt={altText}
            />
            <h3 className="class-card-title mb-1">
                {title}
            </h3>
            <h4 className={tierClassName}>
                Tier {tier}
            </h4>
            <p className="class-card-desc">
                {desc}
            </p>
        </div>
    );
}
