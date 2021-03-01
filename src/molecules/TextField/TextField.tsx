import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { useFocus } from './useFocus';
import { Icon } from '../../index';
import { FieldInstructions, FieldInstructionsProps } from '../FieldInstructions/FieldInstructions';
export interface TextFieldProps {
  /**
   * The label content.
   */
  label?: string;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * The help text content displayed under the input
   */
  helpText?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;

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
   * 'compact' displays the label _in_ the border when input is active
   */
  size?: 'default' | 'compact';

  /**
   * White: white background with light grey border
   * Grey: grey background with no border
   * Defaukt: white background with purple border when active
   */
  kind?: 'white' | 'grey' | 'default';

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: string;

  /**
   * The value of the `input` element.
   */
  value?: string;

  /**
   * Accessibility props
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

  /**
   * For compact TextFields vi use the label as a placeholder
   */
  placeholder?: string;
  autoComplete?: string;

  maxlength?: number;

  /**
   * To show field instructions for the text field
   */
  fieldInstructionsProps?: FieldInstructionsProps;
}

export const TextField = (props: TextFieldProps) => {
  const { onChange, onBlur, onFocus, onKeyDown, focus, setFocus, inputRef } = useFocus(props);
  const inputLabelId = props.label && props.id ? `${props.id}-label` : undefined;
  const statusIcon = props.success ? <Icon icon="check-mark-circle" /> : props.error ? <Icon icon="alert" /> : null;
  const placeholder = props.size === 'compact' ? undefined : props.placeholder;
  const inputHasValue = (props.value && props.value.length) || (inputRef.current && inputRef.current.value.length);

  /**
   * To support the compact TextField we need to position the label within the input,
   * and move to the borde when input is active.
   * To position it correctly we need to find the width of the items in front of the input
   * an apply the appropriate offset.
   */
  const [compactLabelLeftOffset, setCompactLabelLeftOffset] = useState<number | undefined>(undefined);
  const leftContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => setCompactLabelLeftOffset(leftContentRef.current ? leftContentRef.current.clientWidth : undefined), [
    leftContentRef.current,
  ]);
  const labelStyle =
    props.size === 'compact' && !(focus || inputHasValue) && compactLabelLeftOffset
      ? { left: `calc(${compactLabelLeftOffset}px + 0.75rem)` }
      : undefined;

  return (
    <div
      className={cn(
        'telia-textfield',
        {
          'telia-textfield__focus': !!focus,
          'telia-textfield__success': !!props.success,
          'telia-textfield__error': !!props.error,
          'telia-textfield__disabled': !!props.disabled,
          'telia-textfield__compact': props.size === 'compact',
          'telia-textfield__withValue': inputHasValue,
          'telia-textfield__white': props.kind === 'white',
          'telia-textfield__grey': props.kind === 'grey',
          'telia-textfield__prepended': !!props.leftContent,
          'telia-textfield__appended': !!props.rightContent || props.success || props.error,
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
          <label style={labelStyle} className={cn('telia-textfield-label')} id={inputLabelId}>
            {props.label}
          </label>
        ) : null}
        {props.fieldInstructionsProps && <FieldInstructions {...props.fieldInstructionsProps} />}
        <div className="telia-textfield-content">
          {props.leftContent ? (
            <div ref={leftContentRef} className="telia-textfield-leftContent" onClick={(e) => e.stopPropagation()}>
              {props.leftContent}
            </div>
          ) : null}
          <input
            className="telia-textfield-input"
            id={props.id}
            name={props.name}
            ref={inputRef}
            type={props.type || 'text'}
            placeholder={placeholder}
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
            maxLength={props.maxlength}
          />
          {statusIcon ? <span className="telia-textfield-status">{statusIcon}</span> : null}
          {props.rightContent ? (
            <div className="telia-textfield-rightContent" onClick={(e) => e.stopPropagation()}>
              {props.rightContent}
            </div>
          ) : null}
        </div>
      </div>
      <small className={cn('telia-textfield-helptext')}>{props.helpText}</small>
    </div>
  );
};
