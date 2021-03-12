import React from 'react';
import cn from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export interface Props {
  /** Name of svg icon. */
  iconName?: string;
  /** Source for an image. */
  imageSrc?: string;
  /** Number if you want to show number instead of icon. */
  number?: number;
  /** Pebbles style shape of the icon. */
  pebbles?: boolean;

  /** Passed down from parent */
  interactive?: boolean;
  /** Passed down from parent */
  opened?: boolean;
  onSelect?: (index?: number) => void;
  iconClassName?: string;
  /**
   * index of the step
   */
  index?: number;
}

export const StepIcon: React.FC<Props> = (props) => {
  const { iconClassName, onSelect, index, interactive, iconName, imageSrc, number, opened, pebbles } = props;

  const elementType = interactive ? 'button' : 'div';

  return React.createElement(
    elementType,
    {
      className: cn('step-by-step__step', iconClassName, {
        'step-by-step__step--interactive': interactive,
        'step-by-step__step--highlighted': opened,
        'step-by-step__pebbles': pebbles,
        'step-by-step__circle step-by-step__circle--no-border': !pebbles,
      }),
      onClick: interactive ? () => onSelect?.(index) : undefined,
    },
    <>
      {props.children ?? (
        <>
          {pebbles && <SvgIcon iconName="step-by-step-pebble" color="grey" />}
          {imageSrc && <img className="step-by-step__icon" src={imageSrc} />}
          {iconName && <SvgIcon className="step-by-step__icon" iconName={iconName} color="purple" />}
          {number !== null && <span className="step-by-step__number">{number}</span>}
        </>
      )}
    </>
  );
};
