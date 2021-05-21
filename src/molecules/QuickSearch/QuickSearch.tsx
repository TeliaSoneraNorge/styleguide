import React from 'react';
import { TextField, TextFieldProps } from '../TextField/TextField';
import cs from 'classnames';

export const QuickSearch = (props: TextFieldProps) => {
  const { animated } = props;
  return (
    <div
      className={cs('telia-quick-search', {
        'telia-quick-search--animated': animated,
      })}
    >
      <TextField {...props} />
    </div>
  );
};
