import React from 'react';
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
                    <i onClick={onClose} className="info-banner__icon-close"></i>
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

export default BelowTheLineOffer;