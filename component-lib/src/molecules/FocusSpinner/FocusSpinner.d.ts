import * as React from 'react';

export type FocusSpinnerType = "sm" | "md" | "lg";

export interface FocusSpinnerProps {
    type?: FocusSpinnerType;
}

const FocusSpinner: React.FC<FocusSpinnerProps>;

export default FocusSpinner;
