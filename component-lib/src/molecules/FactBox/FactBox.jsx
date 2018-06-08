import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FactContent = ({ children, iconSrc, title }) => (
    <React.Fragment>
        {iconSrc && (
            <img className="fact-box__icon" src="/public/icons/ico_info.svg" />
        )}
        <h3 className="fact-box__heading heading heading--level-3">{title}</h3>
        <div className="fact-box__text">
            {children}
        </div>
    </React.Fragment>
);

/**
 * Status: *finished*
 *
 * FactBox takes the width of its container, but we recommend to use it within a
 * <code>&lt;div class="container container--small"&gt;</code> as the example beneath shows.
 */
const FactBox = ({ children, title, imgAlt, imgSrc, iconSrc, className, ...rest }) => (
    <div
        className={classnames('container container--small', {
            [className]: className
        })}
        {...rest}>
        {imgSrc
            ? <section className="fact-box fact-box--two-columns">
                <div className="fact-box__left">
                    <FactContent iconSrc={iconSrc} title={title}>{children}</FactContent>
                </div>
                <div className="fact-box__right">
                    <img className="fact-box__image" alt={imgAlt} src={imgSrc} />
                </div>
            </section>
            : <section className="fact-box">
                <FactContent iconSrc={iconSrc} title={title}>{children}</FactContent>
            </section>
        }
    </div>
);

FactBox.propTypes = {
    /** Text about the fact.  */
    children: PropTypes.node.isRequired,
    /** Title of the fact. */
    title: PropTypes.string.isRequired,
    /** Used iff imgSrc is specified. */
    imgAlt: PropTypes.string,
    /** Shows this image iff specified. */
    imgSrc: PropTypes.string,
    /** Shows this icon iff specified */
    iconSrc: PropTypes.string,
};

export default FactBox;
