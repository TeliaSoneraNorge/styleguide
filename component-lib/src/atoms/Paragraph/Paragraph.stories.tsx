import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Component library/Atoms/Paragraph',
  component: Paragraph,
};

export const Default = () => (
  <>

    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <Paragraph kind="preamble">
      This is the preamble variation of paragraph text. Any page should only include one such paragraph.
    </Paragraph>
    {/* @ts-expect-error ts-migrate(2559) FIXME: Type '{ children: string; }' has no properties in ... Remove this comment to see the full error message */}
    <Paragraph>This is the standard paragraph, used for long body-text.</Paragraph>
    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
    <Paragraph kind="fineprint">
      This is the fineprint variation of paragraph text. This is a necessity in the telco business. The fineprint needs
      to be readable.
    </Paragraph>

  </>
);