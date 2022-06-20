export interface Step extends InternalStep {
  isComplete: boolean;
  title: string;
  url: string;
  onActivateStep?: any;
}

export interface InternalStep {
  arrowType?: string;
}
