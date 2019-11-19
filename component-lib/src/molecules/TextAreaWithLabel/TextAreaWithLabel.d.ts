import * as React from 'react';

export interface TextAreaWithLabelProps {
    labelText: string;
    hideLabel?: boolean;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
}

const TextAreaWithLabel: React.FC<TextAreaWithLabelProps>;

export default TextAreaWithLabel;
