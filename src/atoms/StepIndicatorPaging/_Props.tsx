import { Step } from './_Step';

export interface Props {
  steps?: Step[] | null | undefined;

  //Defaults to 1 if undefined, 1 equals step[0]
  activeStepNumber?: number | undefined;

  //Clicking a step in the navigation completes previous step, set to false to avoid it
  navigationCompletesPreviousSteps?: boolean | undefined;

  //If 'children' in any (or all) steps contains a button, that marks that step as complete? Pass in the buttonId, so when it is clicked it will auto-complete the step and move to next step
  completeButtonId?: string | undefined | null;

  //If 'children' in any (or all) steps contains a button, that navigates back to previous step? Pass in the buttonId, so when it is clicked it will auto-complete the step and move to previous step
  previousButtonId?: string | undefined | null;

  //Set to false to disable clickable navigation steps, else they are clickable
  navigationClickable?: boolean | undefined;

  //Amount of steps to display before 'paging' gets activated, defaults to 5 if undefind
  pageSize?: number | undefined;

  //Amount of steps to skip per "next" or "previous", defaults to 1 if undefined
  pagingSize?: number | undefined;

  // to false, so left arrow appear as soon as you are not on the first step, assuming you have more steps than "pageSize", else arrows never shows anyways
  displayArrowsOnEdgeSteps?: boolean | undefined;
}
