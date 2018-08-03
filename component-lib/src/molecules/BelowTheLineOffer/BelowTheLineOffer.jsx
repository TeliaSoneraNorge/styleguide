import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';

/**
 * Status: *in progress*.
 */
class BelowTheLineOffer extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const { url, onClick } = this.props;
        if (url) {
            window.location.assign(url);
        } else if (onClick && typeof onClick === 'function') {
            onClick(event);
        }
    }

    render() {
        const { text, url, buttonText, headerText, className, onClose } = this.props;
        return (
            <div className={`info-banner__container ${className}`}>
                <div className="info-banner__top-row">
                    <i onClick={onClose} className="info-banner__icon-close">
                        {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill-rule="evenodd" d="M13.773 10.502l6.546 6.546c.907.907.912 2.366.005 3.273a2.318 2.318 0 0 1-3.278 0L10.5 13.775l-6.546 6.546a2.318 2.318 0 0 1-3.278 0 2.313 2.313 0 0 1 .005-3.273l6.546-6.546L.68 3.956A2.309 2.309 0 0 1 .676.682a2.314 2.314 0 0 1 3.278 0L10.5 7.23 17.046.682A2.309 2.309 0 0 1 20.32.678a2.318 2.318 0 0 1 0 3.278l-6.546 6.546z"/></svg>}
                    </i>
                </div>
                {headerText &&
                    <div className="info-banner__header">
                        {headerText}
                    </div>
                }
                <div className="info-banner__content">
                    {text}
                </div>
                <div className="info-banner__button">
                    <Button className="info-banner__button" onClick={this.handleClick} text={buttonText} kind="primary" />
                </div>
            </div>
        );
    }
}

BelowTheLineOffer.propTypes = {
    /** Url to be used when user clicks on the button */
    url: PropTypes.string,
    /** Function to be called when user clicks on the button. Works only if url is not specified. */
    onClick: PropTypes.func,
    /** Function to be called when user closes the offer.*/
    onClose: PropTypes.func,
    /** Main text to display. */
    text: PropTypes.string,
    /** Text to display in the button. */
    buttonText: PropTypes.string,
    /** Text to display in header part. */
    headerText: PropTypes.string,
    /** Additional classes. */
    className: PropTypes.string,
};

export default BelowTheLineOffer;