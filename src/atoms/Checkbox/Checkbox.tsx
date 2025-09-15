import React from 'react';
import cs from 'classnames';

import { Icon } from '../Icon';

type CheckboxProps = {
  label: string | React.ReactNode;
  hiddenLabel?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;

  /**
   * If the checkbox is being used inside another clickable element, for example a dropdownItem, this should be set to -1
   */
  tabIndex?: number;
  className?: string | any;
  rootClassName?: string;
} & (
  | {
      checked: boolean;
      onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
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

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <label className={cs('telia-checkbox', props.rootClassName)}>
      <input
        id={props.id}
        aria-checked={
          'checked' in props && props.checked ? 'true' : 'partial' in props && props.partial ? 'mixed' : 'false'
        }
        aria-controls={'controls' in props && props.controls ? props.controls : ''}
        className="telia-checkbox__checkbox"
        type="checkbox"
        name={props.name}
        checked={'checked' in props && props.checked}
        disabled={props.disabled}
        onChange={'checked' in props ? props.onChange : undefined}
        onKeyDown={(e) => {
          if (e.keyCode === 32 || e.keyCode === 13) {
            e.stopPropagation();
          }
        }}
        tabIndex={props.tabIndex ?? 0}
      />
      <div className="telia-checkbox__container">
        <div
          className={cs('telia-checkbox__checkbox-container', {
            'telia-checkbox__checkbox-container--checked': 'checked' in props && props.checked,
          })}
        >
          <div
            className={cs({
              'telia-checkbox__icon-container': true,
              'telia-checkbox__icon-container--checked':
                ('partial' in props && props.partial) || ('checked' in props && props.checked),
              'telia-checkbox__icon-container--disabled': props.disabled,
              'telia-checkbox__icon-container--disabled-and-checked':
                props.disabled && (('checked' in props && props.checked) || ('partial' in props && props.partial)),
              [props.className]: props.className,
            })}
          >
            <Icon
              icon="check-mark"
              className={cs('telia-checkbox__icon', {
                'telia-checkbox__icon--visible': 'checked' in props && props.checked,
              })}
              style={{ width: '1rem', height: '1rem' }}
            />
            <Icon
              icon="minus"
              className={cs('telia-checkbox__icon', {
                'telia-checkbox__icon--visible':
                  'checked' in props && !props.checked && 'partial' in props && props.partial,
              })}
              style={{ width: '1rem', height: '1rem' }}
            />
          </div>{' '}
        </div>
        <span
          className={cs('telia-checkbox__label', {
            'telia-checkbox__label--visually-hidden': props.hiddenLabel,
          })}
        >
          {props.label}
        </span>
      </div>
    </label>
  );
};
