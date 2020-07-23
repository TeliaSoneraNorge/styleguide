import React from 'react';
import cs from 'classnames';

import { Icon } from '../../atoms/Icon';

type CheckboxProps = {
  label: string;
  hiddenLabel?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  className?: string | any;
} & (
  | {
      checked: boolean;
      onChange: () => void;
    }
  | {}
) &
  (
    | {
        controls: string;
        partial: boolean;
      }
    | {}
  );

export const Checkbox: React.FC<CheckboxProps> = props => {
  return (
    <label className="checkbox">
      <input
        id={props.id}
        aria-checked={
          'checked' in props && props.checked ? 'true' : 'partial' in props && props.partial ? 'mixed' : 'false'
        }
        aria-controls={'controls' in props && props.controls ? props.controls : ''}
        className="checkbox__checkbox"
        type="checkbox"
        name={props.name}
        checked={'checked' in props && props.checked}
        disabled={props.disabled}
        onChange={'checked' in props ? props.onChange : undefined}
        onKeyDown={e => {
          if (e.keyCode === 32 || e.keyCode === 13) {
            e.stopPropagation();
          }
        }}
      />
      <div
        className={cs({
          'checkbox__icon-container': true,
          'checkbox__icon-container--checked':
            ('partial' in props && props.partial) || ('checked' in props && props.checked),
          'checkbox__icon-container--disabled': props.disabled,
          'checkbox__icon-container--disabled-and-checked':
            props.disabled && (('checked' in props && props.checked) || ('partial' in props && props.partial)),
          [props.className]: props.className,
        })}
      >
        <Icon
          icon="check-mark"
          className={cs({ checkbox__icon: true, 'checkbox__icon--visible': 'checked' in props && props.checked })}
          style={{width: "1rem", height: "1rem"}}
        />
        <Icon
          icon="minus"
          className={cs({
            checkbox__icon: true,
            'checkbox__icon--visible': 'checked' in props && !props.checked && 'partial' in props && props.partial,
          })}
          style={{width: "1rem", height: "1rem"}}
        />
      </div>
      <span
        className={cs({
          checkbox__label: true,
          'checkbox__label--hidden': props.hiddenLabel,
        })}
      >
        {props.label}
      </span>
    </label>
  );
};
