import React from 'react';
import classnames from 'classnames';

type Props = {
    short?: boolean;
    left?: boolean;
};

/**
 * Status: *finished*
 * Category: Misc
 *
 * The css-class <code>.horizontal-rule</code> can be used on any element to give it a grey border in bottom of
 * the element, or it can be used on the <code>&lt;hr/&gt;</code> tag as a standalone component.
 * The style should be used to define a thematic break.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const HorizontalRule = ({ className, short, left, ...rest }: Props) => (
  <hr
    className={classnames('horizontal-rule', {
      [className]: className,
      'horizontal-rule--short': short,
      'horizontal-rule--left': left,
    })}
    {...rest}
  />
);

export default HorizontalRule;
