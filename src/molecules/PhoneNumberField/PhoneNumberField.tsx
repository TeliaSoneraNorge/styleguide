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
  number?: string;
  onChangeNumber: (number: string) => void;
  countryCode?: string;
  onChangeCountryCode: (countryCode: string) => void;
  maxlength?: number;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
} & ({ error: true; helpText: string } | { error?: boolean; helpText?: string });

export const PhoneNumberField = (props: PhoneNumberFieldProps) => {
  const [open, setOpen] = React.useState(false);
  const countryCode =
    props.countryCodes.find((code) => code.value === props.countryCode)?.value ?? props.countryCodes[0].value;

  return (
    <div>
      <div
        className={cn('telia-phonenumber', {
          'telia-phonenumber__error': props.error,
          'telia-phonenumber-countryCode__active': open,
        })}
      >
        {props.label && <label className={cn('telia-phonenumber-label')}>{props.label}</label>}
        <Dropdown disabled={props.disabled} open={open} setOpen={setOpen}>
          <DropdownToggle label={countryCode} color="white" />
          <DropdownMenu>
            {props.countryCodes.map((code) => (
              <DropdownItem label={code.label} onClick={() => props.onChangeCountryCode(code.value)} />
            ))}
          </DropdownMenu>
        </Dropdown>
        <TextField
          placeholder={props.placeholder ?? '_ _  _ _  _ _  _ _'}
          value={props.number}
          onChange={(e) => props.onChangeNumber(e.target.value)}
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
