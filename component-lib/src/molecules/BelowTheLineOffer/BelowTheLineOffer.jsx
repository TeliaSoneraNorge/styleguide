import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

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
                    <SvgIcon iconName="ico_delete" color="black" onClick={onClose} className="info-banner__icon-close" />
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