import { navigateToStepUrl } from './navigateToStepUrl';
import { getMinStepNumberInRange } from './getMinStepNumberInRange';

export const onPagingLeft = (
  maxStepCount: number,
  pageSize: number,
  state: any,
  updateState: any,
  changeActiveStep: boolean,
  number?: any
) => {
  let activeStepNumber = state.currentActiveStepNumber;
  const isStepButtonClicked = number != null;
  const isArrowClicked = !isStepButtonClicked;

  if (isStepButtonClicked) {
    if (number > 0) {
      activeStepNumber = number - 1;
    }
  }

  if (isArrowClicked) {
    if (changeActiveStep) {
      if (activeStepNumber > 0) {
        activeStepNumber -= 1;
      }
    }
  }

  if ((isArrowClicked && !changeActiveStep) || !navigateToStepUrl(state.steps[activeStepNumber]?.url)) {
    const minStepNumber =
      isArrowClicked && !changeActiveStep
        ? state.minStepNumber - 1
        : getMinStepNumberInRange(state.minStepNumber, activeStepNumber, pageSize, maxStepCount, false);

    updateState(state.steps, activeStepNumber, minStepNumber);
  }
};
