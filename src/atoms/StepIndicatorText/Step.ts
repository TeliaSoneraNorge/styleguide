export interface Step extends InternalStep {
  title: string;
  url: string;
  isActive: boolean;
  isComplete: boolean;
  onActivateStep?: any;
}

export interface InternalStep {
  arrowType?: string;
}
