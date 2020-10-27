import * as React from 'react';
import cn from 'classnames';
import { useTextField } from './useTextField';
import { Icon } from '../../index';
export interface Props {
  /**
   * The label content.
   */
  label?: string;
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helpeText` accessible for screen readers.
   */
  id?: string;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * The helpe text content
   */
  helpText?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The color of the component.
   */
  color?: 'primary' | 'secondary';

  /**
   * If `true`, the `input` element will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the outline and helptext will be displayed in an error state.
   * @default false
   */
  error?: boolean;

  /**
   * If `true`, the outline and helptext will be displayed in an success state.
   * @default false
   */
  success?: boolean;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Actions to add to the right within the borders of the TextField
   * eg. Clear-Button or an icon
   */
  rightContent?: React.ReactNode;

  /**
   * Actions to add to the left within the borders of the TextField
   * eg. search-button or just a search icon
   */
  leftContent?: React.ReactNode;

  /**
   * 'compact' displays the lable _in_ the border when input is active
   */
  size?: 'default' | 'compact';

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: string;

  /**
   * The value of the `input` element.
   */
  value?: string;

  /**
   * Accessilbility props
   */
  'aria-label'?: string;
  'aria-activedescendant'?: string;
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  'aria-controls'?: string;
  'aria-labelledby'?: string;

  /**
   * Eventhandlers
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  autoComplete?: string;
}

export const TextField = (props: Props) => {
  const { onChange, onBlur, onFocus, onKeyDown, focus, setFocus, inputRef } = useTextField(props);
  const inputLabelId = props.label && props.id ? `${props.id}-label` : undefined;
  const statusIcon = props.success ? <Icon icon="check-mark-circle" /> : props.error ? <Icon icon="alert" /> : null;
  return (
    <div
      className={cn(
        'telia-textfield',
        {
          'telia-textfield__focus': !!focus,
          'telia-textfield__success': !!props.success,
          'telia-textfield__error': !!props.error,
          'telia-textfield__disabled': !!props.disabled,
        },
        props.className
      )}
      onClick={() => {
        if (!props.disabled) {
          setFocus(true);
        }
      }}
    >
      <div>
        {props.label ? (
          <label className={cn('telia-textfield-label')} id={inputLabelId}>
            {props.label}
          </label>
        ) : null}
        <div className="telia-textfield-content">
          {props.leftContent ? (
            <div className="telia-textfield-leftContent" onClick={e => e.stopPropagation()}>
              {props.leftContent}
            </div>
          ) : null}
          <input
            id={props.id}
            name={props.id}
            ref={inputRef}
            className="telia-textfield-input"
            type={props.type || 'text'}
            disabled={props.disabled}
            value={props.value}
            aria-label={props['aria-label']}
            aria-labelledby={inputLabelId}
            aria-activedescendant={props['aria-activedescendant']}
            aria-autocomplete={props['aria-autocomplete']}
            aria-controls={props['aria-controls']}
            autoComplete={props.autoComplete}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />
          {statusIcon ? <span className="telia-textfield-status">{statusIcon}</span> : null}
          {props.rightContent ? (
            <div className="telia-textfield-rightContent" onClick={e => e.stopPropagation()}>
              {props.rightContent}
            </div>
          ) : null}
        </div>
      </div>

      <small className={cn('telia-textfield-helptext')}>{props.helpText}</small>
    </div>
  );
};
