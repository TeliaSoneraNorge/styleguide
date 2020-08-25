import React from 'react';
import classnames from 'classnames';

import Label from '../../atoms/Label/Label';

const normalizeOptions = (options: any) => options.map((option: any) => option instanceof Object ? option : { name: option, value: option });

type Props = {
    labelMode?: 'text-to-right';
    visibleLabel?: boolean;
    selectedOption?: string;
    label?: React.ReactNode;
    changeSelectedOption?: (...args: any[]) => any;
    options?: (string | {
        name?: string;
        value?: string;
    })[];
};
/**
 * Status: *In progress*.
 * Category: FormElements
 *
 * Improvements: Move to a generic dropdown component
 **/
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const DropDownListWithLabel = ({ className, labelMode, disabled, visibleLabel, label, selectedOption, changeSelectedOption, options = [], ...rest }: Props) => (
  <Label
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
    className={classnames('dropdown-list-with-label', {
      [className]: className,
      [`dropdown-list-with-label--${labelMode}`]: labelMode,
    })}
    isUsingGrayText={labelMode !== 'text-to-right'}
  >
    {visibleLabel ? <span className="dropdown-list-with-label__label-text">{label}</span> : null}
    <select
      className={classnames(
        'dropdown-list-with-label__select',
        {
          'dropdown-list-with-label__select--half': labelMode === 'text-to-right',
        },
        { 'dropdown-list-with-label__select--disabled': disabled }
      )}
      disabled={disabled}
      value={selectedOption}
      onChange={changeSelectedOption}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'string | un... Remove this comment to see the full error message
      aria-label={visibleLabel ? null : label}
      {...rest}
    >
      {normalizeOptions(options).map((option: any) => <option className="dropdown-list-with-label__option" key={option.value} value={option.value}>
        {option.name}
      </option>)}
    </select>
  </Label>
);

export default DropDownListWithLabel;
