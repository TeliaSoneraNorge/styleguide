import React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';

type Props = {
    icon?: string;
    isDisabled?: boolean;
    onClick?: (...args: any[]) => any;
    text?: string;
};

const QuantityButton = ({ icon, isDisabled, onClick, text }: Props) => (
  <button
    className={classnames('button button--small quantity-picker__button', {
      'button--disabled': isDisabled,
    })}
    disabled={isDisabled}
    onClick={onClick}
  >
    {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"link" | ... Remove this comment to see the full error message */}
    <Icon className="quantity-picker__button__icon" icon={icon} title={text} />
  </button>
);

export default QuantityButton;
