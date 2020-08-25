import React from 'react';
import classnames from 'classnames';
import Heading from '../../atoms/Heading/Heading';
import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

/**
 * Status: *in progress*
 * Category: Links
 */
const HeadingLink = ({
  children,
  className,
  ...rest
}: any) => (
  <a
    className={classnames('heading-link', {
      [className]: className,
    })}
    {...rest}
  >
    <Heading className="heading-link--focus-area" level={2} text={children} />
    <HorizontalRule short left />
  </a>
);

export default HeadingLink;
