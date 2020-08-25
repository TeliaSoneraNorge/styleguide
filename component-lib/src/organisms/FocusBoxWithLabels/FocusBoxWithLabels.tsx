import React from 'react';
import classnames from 'classnames';
import FocusBox from '../../molecules/FocusBox/FocusBox';

type OwnProps = {
    content: {
        [key: string]: {
            title?: string;
            description?: string;
        };
    };
    padding?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof FocusBoxWithLabels.defaultProps;

/**
 * Status: *should be deleted*.
 * Category: FocusBox
 *
 * TODO: better documentation.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'FocusBoxWithLabels' implicitly has type 'any' bec... Remove this comment to see the full error message
const FocusBoxWithLabels = ({ padding, content: { upperLeft, upperRight, bottomLeft, bottomRight } }: Props) => {
  return (
    <FocusBox className="focus-box-with-labels">
      <div className="focus-box-with-labels__inner">
        <div
          className={classnames('focus-box-with-labels__upper-left', 'focus-box-with-labels__item', {
            'focus-box-with-labels__upper-left--padding': padding,
            'focus-box-with-labels__upper-left--border': true,
          })}
        >
          <div className="item-title">{upperLeft.title}</div>
          <span className="item-description item-description--bold">{upperLeft.description}</span>
        </div>
        <div
          className={classnames('focus-box-with-labels__upper-right', 'focus-box-with-labels__item', {
            'focus-box-with-labels__upper-right--padding': padding,
            'focus-box-with-labels__upper-right--border': true,
          })}
        >
          <div className="item-title">{upperRight.title}</div>
          <span className="item-description">{upperRight.description}</span>
        </div>
        <div
          className={classnames('focus-box-with-labels__bottom-left', 'focus-box-with-labels__item', {
            'focus-box-with-labels__bottom-left--padding': padding,
            'focus-box-with-labels__bottom-left--border': true,
          })}
        >
          <div className="item-title">{bottomLeft.title}</div>
          <span className="item-description">{bottomLeft.description}</span>
        </div>
        <div
          className={classnames('focus-box-with-labels__bottom-right', 'focus-box-with-labels__item', {
            'focus-box-with-labels__bottom-right--padding': padding,
            'focus-box-with-labels__bottom-right--border': true,
          })}
        >
          <div className="item-title">{bottomRight.title}</div>
          <span className="item-description item-description--bold">{bottomRight.description}</span>
        </div>
      </div>
    </FocusBox>
  );
};

FocusBoxWithLabels.defaultProps = {
  padding: true,
};

export default FocusBoxWithLabels;
