import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FactTwoColumnContent = ({ iconSrc, title, centerIcon, imgSrc, imgAlt, children }) => (
    <React.Fragment>
        <div className="fact-box__left">
            <FactContent
                iconSrc={iconSrc}
                title={title}
                underline={iconSrc && !centerIcon}>
                {children}
            </FactContent>
        </div>
        {imgSrc &&
        <div className="fact-box__right">
            <img className="fact-box__image" alt={imgAlt} src={imgSrc} />
        </div>}
    </React.Fragment>
)

const FactContent = ({ children, iconSrc, title, underline }) => (
    <React.Fragment>
        {iconSrc && (
            <img className="fact-box__icon" src={iconSrc} alt={title} />
        )}
        <h3 className="fact-box__heading heading heading--level-3">{title}</h3>
        {underline &&
            <hr className="fact-box__line" />
        }
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
const FactBox = ({ children, title, imgAlt, imgSrc, iconSrc, className, centerIcon, ...rest }) => (
    <div
        className={classnames('container container--small', {
            [className]: className
        })}
        {...rest}>

        <section
            className={classnames(
                'fact-box',
                {
                    'fact-box--centered-icon': centerIcon,
                    'fact-box--two-columns': !!imgSrc
                })}>
            {imgSrc
                ? <FactTwoColumnContent
                    iconSrc={iconSrc}
                    title={title}
                    underline={!centerIcon}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}>
                    {children}
                </FactTwoColumnContent>
                : <FactContent
                    iconSrc={iconSrc}
                    title={title}
                    underline={!centerIcon}>
                    {children}
                </FactContent>
            }
        </section>
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
    /** Centers the icon */
    centerIcon: PropTypes.bool
};

export default FactBox;
