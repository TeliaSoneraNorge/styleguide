export interface Step {
  title?: string | undefined | null; // Recommended max text length is 28, as that's max length designed for
  url?: string | undefined | null;
  isComplete?: boolean | undefined;
  onValidateStep?: any;
  children?: any;
}
