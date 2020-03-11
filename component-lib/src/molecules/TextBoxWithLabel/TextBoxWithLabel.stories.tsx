import React, { useState, useRef } from 'react';
import { TextBoxWithLabel } from '../../index';

export default {
  title: 'Component library|Molecules/TextBoxWithLabel',
  component: TextBoxWithLabel,
};

export const Default = () => <TextBoxWithLabel labelText="Label for text box" type="text" placeholder="Write here..." />;

export const ErrorTextBox = () => (
  <TextBoxWithLabel
    labelText="Label for text box"
    type="text"
    placeholder="Write here..."
    errorMessage="Oops! this happened"
  />
);

export const DisabledTextBox = () => (
  <TextBoxWithLabel labelText="Label for text box" type="text" placeholder="Write here..." disabled />
);

export const TypeSearch = () => (
  <>
    <p>*Icon styling is not working in this example at storybook, it is safe to use elsewhere*</p>
    <TextBoxWithLabel labelText="Label for search box" type="search" withIcon iconName="ico_search" iconIsButton />
  </>
);

export const TypeColoredIcon = () => (
  <TextBoxWithLabel labelText="Label for text box" type="text" withIcon iconName="ico_check" iconColor="purple" />
);

export const TypeDynamicallyTogglingIcon = () => {  
  const [showIcon, setShowIcon] = useState(false);
  const [value, setValue] = useState('');
  
  const handleOnChange = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    setShowIcon(e.target.value === '42');
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <p>Type 42 in input field.</p>
      <TextBoxWithLabel
        labelText="Label for text box"
        type="text"
        value={value}
        onChange={handleOnChange}
        withIcon
        iconName={showIcon ? 'ico_check' : undefined}
      />
    </React.Fragment>
  );
}

export const TypeWithRef = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleOnChange = (e: React.BaseSyntheticEvent) => {
    setValue(e.target.value)
    inputRef.current = e.target.value
  };

  return (
    <React.Fragment>
      <p>Value from ref: {inputRef.current}</p>
      <TextBoxWithLabel
        labelText="Label for text box"
        type="text"
        value={value}
        ref={inputRef}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
}

