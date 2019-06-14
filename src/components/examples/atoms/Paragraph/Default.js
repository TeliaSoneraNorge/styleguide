import React from 'react';
import { Paragraph } from '@telia/styleguide';

const DefaultParagraph = () => (
    <div>
        <Paragraph kind="preamble">This is the preamble variation of paragraph text. Any page should only include one such paragraph.</Paragraph>
        <Paragraph>This is the standard paragraph, used for long body-text.</Paragraph>
        <Paragraph kind="fineprint">This is the fineprint variation of paragraph text. This is a necessity in the telco business. The fineprint needs to be readable.</Paragraph>
    </div>
);

export default DefaultParagraph;