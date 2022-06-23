import { Step } from './Step';

export interface Props {
  steps?: Step[] | null | undefined;
  activeStepNumber?: number | undefined; //Set initial step to show to this number
  onActiveStepChangeValidator?: any; //When changing step, call on a validator first and it not "input is email", return false so next step is not shown?
  navigationCompletesPreviousSteps?: boolean | undefined; //When navigating steps, mark previous ones as complete?
  completeButtonId?: string | undefined | null; //Does "step children" have a button to complete a step, if so; what is it's id?
  incompleteButtonId?: string | undefined | null; //Does "step children" have a button to incomplete a step, if so: what is it's id?
  navigationClickable?: boolean | undefined; //default is undefined, which makes it clickable, set to false if disabling clicking the indicator steps
  pageSize?: number | undefined; //Defaults to 5 if undefined
  pagingSize?: number | undefined; //Defaults to 1 if undefined
}
