import React from 'react';

const ThemeBoxWithImage = ({ isExpanded, onOpen, id, imageSrc, heading, onClose, children }) =>
    <div className={`theme-box theme-box-with-image${isExpanded ? ' theme-box--open' : ''}`}
        role="button"
        onClick={onOpen}
        tabIndex={isExpanded ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={id}>

        <img className="theme-box-with-image__image" src={imageSrc}/>
        <div className="theme-box-with-image__text-container">
            <h2 className="theme-box-with-image__heading heading heading--level-2 heading--pebble">
                {heading}
            </h2>
            <section className="theme-box-with-image__content" id={id}>
                {children}
            </section>
            <div className="theme-box-with-image__icon" tabIndex={isExpanded ? 0 : -1}>
                <i className="theme-box-with-image__icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="#990AE3" d="M.975.67a1.408 1.408 0 0 1 2.073 0l4.496 4.761 4.51-4.777a1.408 1.408 0 0 1 2.073 0 1.62 1.62 0 0 1 0 2.196L8.581 8.725c-.573.607-1.5.607-2.074 0L.975 2.866a1.597 1.597 0 0 1-.429-1.098C.546 1.37.69.973.976.67z"/></svg>
                </i>
            </div>
        </div>
    </div>;

export default ThemeBoxWithImage;