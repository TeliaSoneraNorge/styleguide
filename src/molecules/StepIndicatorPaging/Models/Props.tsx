import { Step } from './Step';

export interface Props {
  steps?: Step[] | null | undefined;

  //Defaults to 1 if undefined, 1 equals Step[0]
  initialStepNumber?: number | undefined;

  //Defaults to true, set to false to avoid that clicking in the 'navigation' marks previous steps as completed
  navigationCompletesPreviousSteps?: boolean | undefined;

  //Defaults to null, set buttonId of the button that 'completes' a step that is rendered inside of your 'children/content' so when clicked, it marks current step as complete and navigates forward
  completeButtonId?: string | undefined | null;

  //Defaults to null, set buttonId of the button that 'navigates back' that is rendered inside of your 'children/content' so when clicked, it navigates back
  previousButtonId?: string | undefined | null;

  //Defaults to true, set to false if you want to disable clicking steps in the navigation
  navigationClickable?: boolean | undefined;

  //Defaults to 5 if unset, amount of steps required before 'paging arrows' are shown
  //NOTE: Supports only 3-5 before it looks bad on small mobile phones (320px width)
  pageSize?: number | undefined;

  //Defaults to false, set to true to show arrows when you are on the "next last" step in either direction
  showArrowsTillEdgeSteps?: boolean | undefined;

  //Add a container css-class to the children rendered if needed or any css class you want
  contentContainerCssClass?: string | null | undefined;

  //Hide step numbers if numbering them 'does not make sense', might consider different component like Tabs? Radio? But they look and feel different
  //hideStepNumbers?: boolean | undefined;
  //Note: Not allowed "per design" so commented out
}
