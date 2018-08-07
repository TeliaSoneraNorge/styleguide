import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon'

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
                <SvgIcon className="theme-box__close-icon" iconName="ico_delete"/>
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