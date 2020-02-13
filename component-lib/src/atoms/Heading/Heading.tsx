import React from 'react';
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


type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | number;
type HeadingSizes = 'mega' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';

interface HeadingProps {
  className?: any;
  level: HeadingTagName;
  tagName?: number | string;
  text?: React.ReactNode;
  children?: React.ReactNode;
  size?: HeadingSizes;
  style?: React.CSSProperties;
}


const Heading: React.FC<HeadingProps> = ({ level, tagName, text, children, className, size, ...rest }): any => {
  
  if (size) {
    const TagName: any = tagName ? tagName : `${level}`;

    return (
      <TagName
      className={classnames('heading', {
        [className]: className,
        [`heading--${size}`]: size,
      })}
      {...rest}
      >
        {text}
        {children}
      </TagName>
    );
  }

  
  // DEPRECATED!
  if (!size) {
    const DeprecatedTagName: any = tagName ? tagName : `h${level}`;

    return (
      <DeprecatedTagName
        className={classnames('heading', {
          [className]: className,
          [`heading--level-${level}`]: level,
        })}
        {...rest}
      >
        {text}
        {children}
      </DeprecatedTagName>
    );
  }
};



export default Heading;
