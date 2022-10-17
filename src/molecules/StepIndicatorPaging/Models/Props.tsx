import { Step } from './Step';

export interface Props {
  steps?: Step[] | null;

  //Defaults to 0 if undefined  equals Step[0]
  initialStepNumber?: number;

  //Defaults to 5 if unset, amount of steps required before 'paging arrows' are shown, supports only 3-5 by design
  pageSize?: number;

  //Defaults to true, set to false to avoid that clicking in the 'navigation' marks previous steps as completed
  autocompletePreviousSteps?: boolean;

  //Defaults to null, set buttonId of the button that 'completes' a step that is rendered inside of your 'children/content' so when clicked, it marks current step as complete and navigates forward
  completeStepButtonId?: string | null;

  //Defaults to null, set buttonId of the button that 'navigates back' that is rendered inside of your 'children/content' so when clicked, it navigates back
  previousStepButtonId?: string | null;

  //Defaults to true, set to false if you want to disable clicking steps that are "previous"
  completeStepsClickable?: boolean;

  //Defaults to false, set to true if you want to disable clicking on 'grey steps' (incomplete steps)
  incompleteStepsClickable?: boolean;

  //Defaults to false, set to true so clicking arrow only moves the 'step list' instaed of also visiting the step
  arrowsAsCarousel?: boolean;

  //Add css-class to the children rendered wrapped in a section
  contentCssClass?: string | null;

  //Auto set initial step number based on relative path of a step, ignores query string params
  autoSetStepNumberFromUrlPath?: boolean;
}
