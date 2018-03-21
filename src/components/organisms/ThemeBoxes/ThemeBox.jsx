import React from 'react';

const ThemeBox = ({ isExpanded, onOpen, id, iconPath, heading, children, onClose }) =>
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
            <i className="theme-box__icon" style={{ backgroundImage: `url(${iconPath})` }} />
            <h2 className="theme-box__heading heading heading--level-2 heading--pebble">
                {heading}
                <hr className="horizontal-rule horizontal-rule--short" />
            </h2>
        </div>
        <section className="theme-box__content" id={id} dangerouslySetInnerHTML={{ __html: children }}>
        </section>
    </div>;

export default ThemeBox;