import React from 'react';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

/**
 * Status: *finished*
 * Category: Hero
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
 * The Hero image has a max-height of 600px, and when the width of the browser is bigger than 1400px
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

interface HeroSources {
  type?: 'mobile' | 'desktop';
  srcSet?: string;
}

export interface HeroProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  heading: string;
  subheading: string;
  alt: string;
  logoSources?: HeroSources[];
  sources?: HeroSources[];
  pebbles?: 'easter' | 'black-friday' | 'variant-1' | 'variant-2' | 'variant-3' | 'variant-4';
  mode?: 'mobile' | 'desktop';
  align?: 'top' | 'bottom';
  alignBox?: 'left' | 'right' | 'center';
  logoAlign?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const Hero: React.FC<HeroProps> = props => {
  const {
    className = '',
    heading,
    subheading,
    alt,
    sources = [],
    logoSources = [],
    pebbles,
    mode,
    align,
    logoAlign,
    alignBox,
    ...rest
  } = props;

  return (
    <a
      className={classnames('hero heading-link', {
        [className]: className,
        [`hero--with-pebbles hero--with-pebbles-${pebbles}`]: pebbles,
        [`hero--with-pebbles-only-on-${mode}`]: mode,
      })}
      {...rest}
    >
      <picture className="hero__picture">
        {sources.map(it => (
          <source
            key={uniqueId('source-')}
            srcSet={it.srcSet}
            media={it.type === 'mobile' ? '(max-width: 47.99em)' : '(min-width: 48em)'}
          />
        ))}
        <img
          className={classnames('hero__image', {
            [`hero__image--align-${align}`]: align,
          })}
          alt={alt}
        />
      </picture>
      {logoSources && !!logoSources.length && (
        <picture className="hero__logo">
          {logoSources.map(it => (
            <source
              key={uniqueId('source-')}
              srcSet={it.srcSet}
              media={it.type === 'mobile' ? '(max-width: 47.99em)' : '(min-width: 48em)'}
            />
          ))}
          <img
            className={classnames(
              'hero__logo-image',
              `hero__logo-image--align-${logoAlign || 'top-right'}`
            )}
            alt={alt}
          />
        </picture>
      )}
      <div
        className={classnames(
          'hero__box heading-link--focus-area',
          `hero__box--align-${alignBox || 'left'}`
        )}
      >
        <h2 className="hero__heading">{heading}</h2>
        <div className="hero__subheading">
          {subheading}
          <HorizontalRule short left />
        </div>
      </div>
    </a>
  );
}

export default Hero;
