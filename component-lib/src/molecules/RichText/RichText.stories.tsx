import React, { useState } from 'react';
import { RichText } from '../../index';

export default {
  title: 'Component library|Molecules/RichText',
  component: RichText,
};

export const DefaultRichText = () => (
  <RichText>
    See{' '}
    <a href="/information-article-5" className="link">
      this sample page
    </a>{' '}
    that make use of this component to style headings, paragraphs and other basic elements in running text.
  </RichText>
);