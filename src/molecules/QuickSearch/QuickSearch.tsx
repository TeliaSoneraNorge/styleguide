import { TextField, TextFieldProps } from '../TextField/TextField';
import React from 'react';
import './QuickSearch.pcss';

export const QuickSearch = (props: TextFieldProps) => {
  return (
    <div className="telia-quick-search">
      <TextField {...props} />
    </div>
  );
};
