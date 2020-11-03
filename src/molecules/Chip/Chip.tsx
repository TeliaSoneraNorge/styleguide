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
   * Styling of chip. Default is white.
   */
  kind?: 'white' | 'grey';
  /**
   * The click event for the whole chip (in filter mode) or for the remove button (in select mode).
   */
  onClick?: () => void;
  className?: string;
};

export const Chip = ({ label, icon, active, disabled, kind, mode = 'choice', onClick, className }: Props) => {
  const Tag = mode === 'input' ? 'div' : 'button';
  const role = Tag === 'div' && !(mode === 'input') ? 'button' : undefined;
  return (
    <Tag
      role={role}
      type={Tag === 'button' ? 'button' : undefined}
      className={cs(
        'telia-chip',
        `telia-chip__${mode}`,
        {
          'telia-chip__disabled': disabled,
          'telia-chip__active': active || mode === 'input',
          'telia-chip__grey': kind === 'grey',
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
      {icon && <Icon className="telia-chip-icon" icon={icon} />}
      <div className="telia-chip-label">{label}</div>
      {mode === 'input' && <Button kind="secondary-text" icon="close" onClick={onClick} disabled={disabled} />}
    </Tag>
  );
};

export default Chip;
