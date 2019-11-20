import * as React from 'react';

export type SpinnerType = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  className?: string;
  type?: SpinnerType;
}

const Spinner: React.FC<SpinnerProps>;

export default Spinner;
