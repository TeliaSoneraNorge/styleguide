import * as React from 'react';

export type HeadingLevel = number | string;

export type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';

export interface HeadingProps {
  /**
   * Level of this heading (1-6).
   */
  level: HeadingLevel;
  /**
   * The tag name
   */
  tagName?: HeadingTagName;
  /**
   * Content of this heading.
   */
  text?: React.ReactNode;
  /**
   * Content of this heading.
   */
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps>;

export default Heading;
