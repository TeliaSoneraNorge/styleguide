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
  const isArrowClicked = number == null;

  if (isCompleteButtonClicked) {
    if (number <= maxStepCount) {
      if (!setStepsComplete(steps, activeStepNumber, number, completePreviousSteps)) {
        return;
      }

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
        if (completePreviousSteps) {
          if (!setStepsComplete(steps, activeStepNumber, activeStepNumber, completePreviousSteps)) {
            return;
          }
        }

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
