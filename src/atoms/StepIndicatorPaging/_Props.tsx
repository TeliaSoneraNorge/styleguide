import { Step } from './_Step';

export interface Props {
  steps?: Step[] | null | undefined;

  //Defaults to 1 if undefined, 1 equals step[0]
  initialStepNumber?: number | undefined;

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

  //Set to true to only show arrows when you are on the "last" step, and if there are more steps, then arrow buttons are displayed
  enablePagingOnlyOnEdgeSteps?: boolean | undefined;

  //Add a container-size to the children rendered if needed or additional css class you want to wrap the 'step content' inside of
  contentContainerCssClass?: string | null | undefined;

  //Set to true to disable changing the step when using the 'arrows', it then just simply navigates through the step numbers
  disablePagingChangesActiveStep?: boolean | undefined;
}
