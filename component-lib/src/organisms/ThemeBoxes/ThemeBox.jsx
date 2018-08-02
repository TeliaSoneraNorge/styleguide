import React from 'react';
import PropTypes from 'prop-types';

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
                <i className="theme-box__close-icon">
                    {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill-rule="evenodd" d="M13.773 10.502l6.546 6.546c.907.907.912 2.366.005 3.273a2.318 2.318 0 0 1-3.278 0L10.5 13.775l-6.546 6.546a2.318 2.318 0 0 1-3.278 0 2.313 2.313 0 0 1 .005-3.273l6.546-6.546L.68 3.956A2.309 2.309 0 0 1 .676.682a2.314 2.314 0 0 1 3.278 0L10.5 7.23 17.046.682A2.309 2.309 0 0 1 20.32.678a2.318 2.318 0 0 1 0 3.278l-6.546 6.546z" /></svg>}
                </i>
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
ThemeBox.propTypes = {
    isExpanded: PropTypes.bool,
    onOpen: PropTypes.func,
    id: PropTypes.string,
    iconSvg: PropTypes.node,
    heading: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func,
};

export default ThemeBox;