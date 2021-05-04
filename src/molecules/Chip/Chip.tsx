import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';
import { Button } from '../../business/Button';

type Props = {
  /**
   * The label content.
   */
  label: string;
  icon?: IconDefinition;
  /**
   * Whether the chip is currently active/selected. Input chip will always be active
   */
  active?: boolean;
  disabled?: boolean;
  /**
   * To use Chip in `choice` or `input` mode.
   * In `input` mode, the chip will show an inline `remove` icon button when it is a active.
   * In `choice` mode, each chip functions as a toggle button.
   */
  mode?: 'choice' | 'input';
  /**
   * Color of chip. Default is white.
   */
  color?: 'white' | 'grey';
  /**
   * Styling of chip. Default is rounded.
   */
  kind?: 'rounded' | 'square';
  /**
   * The click event for the whole chip (in filter mode) or for the remove button (in select mode).
   */
  onClick?: () => void;

  className?: string;
};

export const Chip = ({ label, icon, active, disabled, color, kind, mode = 'choice', onClick, className }: Props) => {
  const Tag = mode === 'input' ? 'div' : 'button';
  const role = Tag === 'div' && !(mode === 'input') ? 'button' : undefined;
  return (
    <Tag
      role={role}
      type={Tag === 'button' ? 'button' : undefined}
      className={cs(
        'telia-chip',
        `telia-chip--${mode}`,
        {
          'telia-chip--disabled': disabled,
          'telia-chip--active': active || mode === 'input',
          'telia-chip--grey': color === 'grey',
          'telia-chip--square': kind === 'square',
          'telia-chip--hasIcon': icon,
        },
        className
      )}
      onClick={() => {
        if (active && mode === 'input') {
          return;
        } else if (onClick) {
          onClick();
        }
      }}
      tabIndex={disabled || mode === 'input' ? -1 : 0}
    >
      {icon && <Icon className="telia-chip__icon" icon={icon} />}
      <div className="telia-chip__label">{label}</div>
      {mode === 'input' && (
        <Button
          kind="secondary-text"
          icon="close"
          onClick={onClick}
          disabled={disabled}
          className="telia-chip__closeBtn"
        />
      )}
    </Tag>
  );
};

export default Chip;
