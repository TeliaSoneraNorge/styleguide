export interface Step {
  title: string;
  url: string;
  onActivateStep?: any;
  isActive?: boolean;
  isComplete?: boolean;
  content?: any;
  onCompleteButtonId?: string | undefined;
  onIncompleteButtonId?: string | undefined;
}

export interface InternalStep extends Step {
  arrowType?: string | null;
  index: number;
}
