import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 * Category: Style
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2, h3 and h4 headings have been defined.
 *
 * Margin for headings should be handled in the components that make use of this component.
 * See <a href='/information-article-5' class='link'>this sample page</a> that make use of the
 * <a href='/components/molecules#RichText' class='link'>RichText component</a> to style headings in running text.
 *
 * Heading can be centered by applying heading--centered.
 */
const Heading = ({ level, tagName, text, children, className, size, align, ...rest }) => {
  const TagName = tagName ? tagName : `h${level}`;

  if (size) {
    return (
      <TagName
        className={classnames('heading', {
          [className]: className,
          [`heading--${size}`]: size,
          [`heading--align-${align}`]: align,
        })}
        {...rest}
      >
        {text}
        {children}
      </TagName>
    );
  }

  // OLD DEPRECATED
  if (!size) {
    return (
      <TagName
        className={classnames('heading', {
          [className]: className,
          [`heading--level-${level}`]: level,
        })}
        {...rest}
      >
        {text}
        {children}
      </TagName>
    );
  }
};

Heading.propTypes = {
  /** Level of this heading (1-6). */
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** The tag name */
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong']),
  /** Content of this heading. */
  text: PropTypes.node,
  /** Content of this heading. */
  children: PropTypes.node,
  size: PropTypes.string,
};

export default Heading;
