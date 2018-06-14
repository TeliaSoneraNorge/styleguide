import React from 'react';

const ThemeBox = ({ isExpanded, onOpen, id, iconSvg, heading, children, onClose }) =>
    <div className={`theme-box${isExpanded ? ' theme-box--open' : ''} heading-link`}
        role="button"
        onClick={onOpen}
        tabIndex={isExpanded ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={id}>
        <div className="theme-box__header heading-link--focus-area">
            <button className="theme-box__close-expanded-info" onClick={onClose} aria-controls={id}>
                <span className="theme-box__close-text">LUKK</span>
                <i className="theme-box__close-icon" />
            </button>

            <div className="theme-box__icon">{iconSvg}</div>

            <h2 className="theme-box__heading heading heading--level-2 heading--pebble">
                {heading}
                <hr className="horizontal-rule horizontal-rule--short" />
            </h2>
        </div>
        <section className="theme-box__content" id={id}>
            {children}
        </section>
    </div>;

export default ThemeBox;