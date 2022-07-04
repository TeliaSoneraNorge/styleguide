export interface Step {
  title?: string | undefined | null;
  url?: string | undefined | null;
  isComplete?: boolean | undefined;
  onValidateStep?: any;
  children?: any;
}
