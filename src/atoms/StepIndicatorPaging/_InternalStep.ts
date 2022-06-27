import { Step } from './_Step';

export interface InternalStep extends Step {
  arrowType?: string | null;
  number: number;
}
