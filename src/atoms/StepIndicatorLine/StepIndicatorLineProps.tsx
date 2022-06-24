import { Step } from './Step';

export interface Props {
  steps?: Step[] | null | undefined;
  activeStepNumber?: number | undefined; //Defaults to 1 if undefined, 1 equals step[0]
  navigationCompletesPreviousSteps?: boolean | undefined; //When navigating steps, mark previous ones as complete?
  completeButtonId?: string | undefined | null; //Does "step children" have a button to complete a step, if so; what is it's id?
  incompleteButtonId?: string | undefined | null; //Does "step children" have a button to incomplete a step, if so: what is it's id?
  navigationClickable?: boolean | undefined; //Default is undefined, which makes it clickable, set to false if disabling clicking the indicator steps
  pageSize?: number | undefined; //Defaults to 5 if undefined
  pagingSize?: number | undefined; //Defaults to 1 if undefined
  displayArrowsOnEdgeSteps?: boolean | undefined; //Defaults to false, so left arrow appear as soon as you are not on the first step, assuming you have more steps than "pageSize", else arrows never shows anyways
}
