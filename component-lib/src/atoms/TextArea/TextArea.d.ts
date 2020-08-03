import * as React from 'react';

export interface TextAreaProps {
  /**
   * Whenever should this TextArea display as error. Use when input text is not valid.
   */
  error?: boolean;
}

export const TextArea: React.FC<TextAreaProps>;

export default TextArea;
