import * as React from 'react';

export type ParagraphKind = "fineprint" | "preamble";

export interface ParagraphProps {
    /**
     * One of 'fineprint' or 'preamble'.
     */
    kind?: ParagraphKind;
}

const Paragraph: React.FC<ParagraphProps>;

export default Paragraph;
