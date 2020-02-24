import * as React from 'react';

const Form: React.FC<DOMAttributes<HTMLFormElement>> & {
  FormRow: React.FC;

  FormColumn: React.FC<{ size?: string }>;

  FormSuccessMessage: React.FC;
};

export default Form;
