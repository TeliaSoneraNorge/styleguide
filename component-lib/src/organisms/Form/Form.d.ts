import * as React from 'react';

declare const Form: React.FC<React.DOMAttributes<HTMLFormElement>> & {
  FormRow: React.FC;

  FormColumn: React.FC<{ size?: string }>;

  FormSuccessMessage: React.FC;
};

export default Form;
