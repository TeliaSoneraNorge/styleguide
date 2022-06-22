export interface Step {
  title: string;
  url?: string | undefined | null;
  onActivateStep?: any;
  isComplete?: boolean;
  children?: any;
  onCompleteButtonId?: string | undefined;
  onIncompleteButtonId?: string | undefined;
}

export interface InternalStep extends Step {
  arrowType?: string | null;
  index: number;
}
