import React from 'react';
import { TextField, TextFieldProps } from '../TextField/TextField';

export const QuickSearch = (props: TextFieldProps) => {
  return (
    <div className="telia-quick-search">
      <TextField {...props} />
    </div>
  );
};
