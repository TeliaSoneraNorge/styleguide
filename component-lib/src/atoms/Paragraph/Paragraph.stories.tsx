import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Component library|Atoms/Paragraph',
  component: Paragraph,
};

export const Default = () => (
  <>

    <Paragraph kind="preamble">
      This is the preamble variation of paragraph text. Any page should only include one such paragraph.
    </Paragraph>
    <Paragraph>This is the standard paragraph, used for long body-text.</Paragraph>
    <Paragraph kind="fineprint">
      This is the fineprint variation of paragraph text. This is a necessity in the telco business. The fineprint needs
      to be readable.
    </Paragraph>

  </>
);