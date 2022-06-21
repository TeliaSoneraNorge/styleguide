export interface Step {
  title: string;
  url: string;
  onActivateStep?: any;
  isActive?: boolean;
  isComplete?: boolean;
  children?: any;
}

export interface InternalStep extends Step {
  arrowType?: string | null;
  index: number;
}
