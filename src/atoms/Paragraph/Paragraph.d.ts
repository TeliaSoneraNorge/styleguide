import * as React from 'react';

export type ParagraphKind = 'fineprint' | 'preamble';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * One of 'fineprint' or 'preamble'.
   */
  kind?: ParagraphKind;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export const Paragraph: React.FC<ParagraphProps>;

export default Paragraph;
