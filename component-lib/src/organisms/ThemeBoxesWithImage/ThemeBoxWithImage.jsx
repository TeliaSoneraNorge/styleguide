import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon'

const ThemeBoxWithImage = ({ isExpanded, onOpen, id, imageSrc, heading, onClose, children }) =>
    <div className={`theme-box theme-box-with-image${isExpanded ? ' theme-box--open' : ''}`}
        role="button"
        onClick={onOpen}
        tabIndex={isExpanded ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={id}>

        <img className="theme-box-with-image__image" src={imageSrc} />
        <div className="theme-box-with-image__text-container">
            <h2 className="theme-box-with-image__heading heading heading--level-2 heading--pebble">
                {heading}
            </h2>
            <section className="theme-box-with-image__content" id={id}>
                {children}
            </section>
            <div className="theme-box-with-image__icon" role="button" tabIndex={isExpanded ? 0 : -1} aria-controls={id}>
                <SvgIcon className="theme-box-with-image__icon-box" iconName="ico_dropArrow" color="purple"/>
            </div>
        </div>
    </div>;
ThemeBoxWithImage.propTypes = {
    isExpanded: PropTypes.bool,
    onOpen: PropTypes.func,
    id: PropTypes.string,
    imageSrc: PropTypes.string,
    heading: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default ThemeBoxWithImage;