import React from 'react';
import cs from 'classnames';

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

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

export type HeadingSize = 'mega' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';

export interface HeadingProps {
  /**
   * This should always be provided. The visual size of the heading. Does not affect the semantic tag. Default size is `xxl` for h1 down to `xs` for h6 tags.
   */
  size?: HeadingSize;

  /**
   * This should always be provided. Use `tag` to select semantic element (h1,h2 etc.) and `size` to set the visual heading size.
   */
  tag?: HeadingTag;

  /**
   * @deprecated Use `tag` to select semantic element (h1,h2 etc.) and `size` to set the visual heading size.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * @deprecated  Use `tag` to select semantic element (h1,h2 etc.) and `size` to set the visual heading size.
   */
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * Additional custom CSS classes to provide to the component.
   */
  className?: string;
  id?: string;

  /**
   * Custom styling set on the Heading component.
   */
  style?: React.CSSProperties;

  /**
   * The contents of the heading tag. `children` and `text` can be used interchangeably.
   */
  text?: React.ReactNode;

  /**
   * The contents of the heading tag. `children` and `text` can be used interchangeably.
   */
  children?: React.ReactNode;

  /**
   * If the Heading is used with a ref, for example to capture focus for accessibility, this should be set to -1
   */
  tabIndex?: number;
}

const defaultSizeByTag: { [key: string]: HeadingSize } = {
  h1: 'xxl',
  h2: 'xl',
  h3: 'l',
  h4: 'm',
  h5: 's',
  h6: 'xs',
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { level, tag, tagName, text, children, className, size, ...rest } = props;

  let Tag: HeadingTag = tag || 'h1';

  // Check deprecated values for level and tagName
  if (props.level) {
    Tag = `h${props.level}` as HeadingTag;
  }
  if (props.tagName) {
    Tag = props.tagName as HeadingTag;
  }

  const hSize: HeadingSize = size || defaultSizeByTag[Tag] || 'xxl';

  return (
    <Tag
      className={cs(
        'heading',
        props.className,
        hSize ? `heading--${hSize}` : undefined,
        props.level ? `heading--level-${props.level}` : undefined
      )}
      style={props.style}
      ref={ref}
      {...rest}
    >
      {text}
      {children}
    </Tag>
  );
});

Heading.displayName = 'Heading';

export default Heading;
