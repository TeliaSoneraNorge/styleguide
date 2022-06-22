import { Step } from './Step';

export interface Props {
  steps?: Step[] | null | undefined;
  activeStepNumber?: number | undefined;
  onActiveStepChangeValidator?: any;
  onStepNavigationCompletesPreviousSteps?: boolean | undefined;
  completeButtonId?: string | undefined | null;
  incompleteButtonId?: string | undefined | null;
  pageSize?: number | undefined;
  pagingSize?: number | undefined;
}
