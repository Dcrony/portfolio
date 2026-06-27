import React from 'react';

const SectionHeader = ({ title, subtitle, align = 'center' }) => (
    <div className={`section-header section-header--${align}`}>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
);

export default SectionHeader;
