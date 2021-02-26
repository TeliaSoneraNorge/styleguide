import React from 'react';
import cn from 'classnames';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../Dropdown';
import { TextField } from '../TextField/TextField';

export type CountryCode = {
  value: string;
  label: string;
};

export type PhoneNumberFieldProps = {
  /**
   * The landcodes to show in the dropdown.
   */
  countryCodes: CountryCode[];
  maxlength?: number;
  onChange: (number: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
} & ({ error: true; helpText?: string } | { error?: boolean; helpText?: string });

export const PhoneNumberField = (props: PhoneNumberFieldProps) => {
  const [landCode, setLandCode] = React.useState(props.countryCodes[0].value);
  const [number, setNumber] = React.useState('');

  const setFullNumber = (number: string) => {
    if (number) props.onChange(`${landCode}${number}`);
  };

  return (
    <div>
      <div
        className={cn('telia-phonenumber', {
          'telia-phonenumber__error': props.error,
        })}
      >
        {props.label && <label className={cn('telia-phonenumber-label')}>{props.label}</label>}
        <Dropdown disabled={props.disabled}>
          <DropdownToggle label={landCode} color="white" />
          <DropdownMenu>
            {props.countryCodes.map((code) => (
              <DropdownItem label={code.label} onClick={() => setLandCode(code.value)} />
            ))}
          </DropdownMenu>
        </Dropdown>
        <TextField
          placeholder={props.placeholder ?? '_ _  _ _  _ _  _ _'}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onBlur={(e) => setFullNumber(e.target.value)}
          error={props.error}
          disabled={props.disabled}
          maxlength={props.maxlength}
        />
      </div>
      <small className={cn('telia-phonenumber-helptext', { 'telia-phonenumber-helptext--error': props.error })}>
        {props.helpText}
      </small>
    </div>
  );
};
