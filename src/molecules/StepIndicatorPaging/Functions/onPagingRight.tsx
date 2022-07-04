import { navigateToStepUrl } from './navigateToStepUrl';
import { getMinStepNumberInRange } from './getMinStepNumberInRange';
import { setStepsComplete } from './setStepsComplete';

export const onPagingRight = (
  completePreviousSteps: boolean,
  pageSize: number,
  maxStepCount: number,
  state: any,
  updateState: any,
  changeActiveStep: boolean,
  number?: number | undefined
) => {
  const steps = state.steps;

  let activeStepNumber = state.currentActiveStepNumber;

  const isCompleteButtonClicked = number != null;
  const isArrowClicked = isCompleteButtonClicked == false;

  if (isCompleteButtonClicked) {
    if (number <= maxStepCount) {
      setStepsComplete(steps, number, completePreviousSteps);

      if (number < maxStepCount) {
        activeStepNumber = number + 1;
      }
      if (changeActiveStep && activeStepNumber <= state.minStepNumber) {
        state.minStepNumber = activeStepNumber - 1;
      }
    }
  }

  if (isArrowClicked) {
    if (changeActiveStep) {
      if (activeStepNumber < maxStepCount) {
        setStepsComplete(steps, activeStepNumber, completePreviousSteps);

        activeStepNumber += 1;
      }
    }
  }

  if (!navigateToStepUrl(state.steps[activeStepNumber]?.url)) {
    const minStepNumber =
      isArrowClicked && !changeActiveStep
        ? state.minStepNumber + 1
        : getMinStepNumberInRange(state.minStepNumber, activeStepNumber, pageSize, maxStepCount, true);

    updateState(steps, activeStepNumber, minStepNumber, isArrowClicked);
  }
};
