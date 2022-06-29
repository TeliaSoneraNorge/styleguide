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

  //Set to false to disable clickable navigation steps, this also hides arrows, else arrows shows if more steps and steps are clickable
  navigationClickable?: boolean | undefined;

  //Amount of steps to display before 'paging' gets activated, defaults to 5 if undefind
  //NOTE: Only up to 5 is supported on smallest mobile view (320px width)
  pageSize?: number | undefined;

  //Set to true to only show arrows when you are on the "last" step, and if there are more steps, then arrow buttons are displayed
  enablePagingOnlyOnEdgeSteps?: boolean | undefined;

  //Add a container-snavigationClickableize to the children rendered if needed or additional css class you want to wrap the 'step content' inside of
  contentContainerCssClass?: string | null | undefined;

  //Hide step numbers if ordering them 'does not make sense', might consider different component like Tabs? Radio?
  hideStepNumbers?: boolean | undefined;
}
