export interface Step {
  title: string;
  url?: string | undefined | null;
  isComplete?: boolean;
  children?: any;
  onCompleteButtonId?: string | undefined;
  onIncompleteButtonId?: string | undefined;
  onValidateStep?: any; //Occurs right before step is changed to the 'next', to validate/invalidate current step
}

export interface InternalStep extends Step {
  arrowType?: string | null;
  index: number;
}
