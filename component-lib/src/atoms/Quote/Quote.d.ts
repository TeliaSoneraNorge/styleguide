import * as React from 'react';

export interface QuoteProps {
  /**
   * Whenever should be inlined in the right side of a text.
   */
  inline?: boolean;
  /**
   * Text of the quote.
   */
  children: string;
  /**
   * Source of the quote.
   */
  source: string;
}

const Quote: React.FC<QuoteProps>;

export default Quote;
