import { Step } from './Step';

export interface InternalStep extends Step {
  arrowType?: string | null;
  number: number;
}
