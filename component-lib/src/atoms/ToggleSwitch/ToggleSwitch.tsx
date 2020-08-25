import React from 'react';
import classnames from 'classnames';

const PANEL = {
  LEFT: 'left',
  RIGHT: 'right',
};

type OwnProps = {
    active?: any; // TODO: PropTypes.oneOf(Object.keys(PANEL).map(k => PANEL[k]))
    backgroundColor?: 'white' | 'grey';
    className?: string;
    leftLabel?: string;
    rightLabel?: string;
    leftOnClickHandler?: (...args: any[]) => any;
    rightOnClickHandler?: (...args: any[]) => any;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof ToggleSwitch.defaultProps;

/**
 * Status: *In progress*.
 * Category: FormElements
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'ToggleSwitch' implicitly has type 'any' because i... Remove this comment to see the full error message
const ToggleSwitch = ({ leftLabel, rightLabel, leftOnClickHandler, rightOnClickHandler, active, backgroundColor, className, }: Props) => (
  <div
    className={classnames('toggle-switch', {
      [`toggle-switch__${backgroundColor}`]: true,
      [className]: className,
    })}
    role="group"
  >
    <button
      type="button"
      aria-pressed={active === PANEL.LEFT}
      className="toggle-switch__button"
      onClick={leftOnClickHandler}
    >
      {leftLabel}
    </button>
    <button
      type="button"
      aria-pressed={active === PANEL.RIGHT}
      className="toggle-switch__button"
      onClick={rightOnClickHandler}
    >
      {rightLabel}
    </button>
  </div>
);

ToggleSwitch.defaultProps = {
  leftOnClickHandler: () => {},
  rightOnClickHandler: () => {},
  backgroundColor: 'white',
};

export default ToggleSwitch;
