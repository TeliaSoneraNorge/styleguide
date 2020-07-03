import * as React from 'react';

export const Form: React.FC<React.DOMAttributes<HTMLFormElement>> & {
  FormRow: React.FC;

  FormColumn: React.FC<{ size?: string }>;

  FormSuccessMessage: React.FC;
};

export default Form;
