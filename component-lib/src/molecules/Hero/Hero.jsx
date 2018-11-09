import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

/**
 * Status: *finished*
 *
 * The hero component requires two images, one for desktop and one for mobile view.
 * With using the <code>&lt;picture&gt;</code> element this component itself decides when to load and render
 * appropriate image for specific viewport.
 *
 * Image recommendations from designers:
 * - Images in the size of 1440x620px or the same width/height format seems to be a good size to use in this component.
 * - Avoid using images that contains a lot of white color as this will blend in with the content and the user might not differ the picture from the rounded mask or the overlapping content.
 * - Images of nature and people are easier to match with this component than portrait images.
 *
 * The Hero image has a max-height of 620px, and when the width of the browser is bigger than 1440px
 * the image is center aligned and gets cropped from both the top and bottom by default. If you want
 * the image to be top aligned use the css modifier class
 * <code>.hero&#95;&#95;image--top-aligned</code> on the image-element instead. If you want it to be bottom-aligned
 * use <code>.hero&#95;&#95;image--bottom-aligned</code>.
 *
 * The heading in the white box should span a maximum of two lines
 * and the sentence below should span a maximum of two lines.
 *
 * You can add pebbles to the page by adding <code>.hero--with-pebbles</code>.
 * If you want the pebbles only on desktop or mobile you can in addition add
 * <code>.hero--with-pebbles-only-on-mobile</code> or <code>.hero--with-pebbles-only-on-desktop</code>.
 * Choose between different variation of pebbles by adding
 * <code>.hero--with-pebbles-variant-1</code> (number 1-4 exists).
 * There is also one for black friday <code>.hero--with-pebbles-black-friday</code> and
 * one for easter <code>.hero--with-pebbles-easter</code>.
 */
const Hero = ({
    className,
    heading,
    subheading,
    src,
    alt,
    sources = [],
    logoSources = [],
    pebbles,
    mode,
    align,
    logoAlign,
    ...rest
}) => (
    <a
        className={classnames('hero heading-link', {
            [className]: className,
            [`hero--with-pebbles hero--with-pebbles-${pebbles}`]: pebbles,
            [`hero--with-pebbles-only-on-${mode}`]: mode,
        })}
        {...rest}>
        <React.Fragment>
            <picture className="hero__picture">
                {sources.map(it => <source
                    key={_.uniqueId('source-')}
                    srcSet={it.srcSet}
                    media={it.type==='mobile' ? '(max-width: 47.99em)' : '(min-width: 48em)'} />
                )}
                <img
                    className={classnames('hero__image', {
                        [`hero__image--align-${align}`]: align,
                    })}
                    alt={alt} />
            </picture>
            {logoSources && !!logoSources.length &&
                <picture className="hero__logo">
                    {logoSources.map(it => <source
                        key={_.uniqueId('source-')}
                        srcSet={it.srcSet}
                        media={it.type==='mobile' ? '(max-width: 47.99em)' : '(min-width: 48em)'} />
                    )}
                    <img
                        className={classnames('hero__logo-image', {
                            [`hero__logo-image--align-${logoAlign || 'top-right'}`]: logoAlign,
                        })}
                        alt={alt} />
                </picture>
            }
            <div className="hero__box heading-link--focus-area">
                <h2 className="hero__heading">{heading}</h2>
                <div className="hero__subheading">{subheading}
                    <HorizontalRule short left/>
                </div>
            </div>
        </React.Fragment>
    </a>
);

Hero.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    logoSources: PropTypes.array,
    /** Set of sources. */
    sources: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['mobile', 'desktop']),
        srcSet: PropTypes.string,
    })),
    /** One of ['easter', 'black-friday', 'variant-1', 'variant-2', 'variant-3', 'variant-4'] */
    pebbles: PropTypes.oneOf(['easter', 'black-friday', 'variant-1', 'variant-2', 'variant-3', 'variant-4']),
    /** One of ['mobile', 'desktop'] */
    mode: PropTypes.oneOf(['mobile', 'desktop']),
    /** One of ['top', 'bottom'] */
    align: PropTypes.oneOf(['top', 'bottom'])
};

export default Hero;