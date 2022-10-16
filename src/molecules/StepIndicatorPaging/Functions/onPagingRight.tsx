import { navigateToStepUrl } from './navigateToStepUrl';
import { getMinStepNumberInRange } from './getMinStepNumberInRange';
import { setStepsComplete } from './setStepsComplete';

export const onPagingRight = (
  autocompletePreviousSteps: boolean,
  pageSize: number,
  maxStepCount: number,
  state: any,
  updateState: any,
  arrowAsCarousel: boolean,
  number?: any
) => {
  const steps = state.steps;

  let activeStepNumber = state.currentActiveStepNumber;
  const isStepButtonClicked = number != null;
  const isArrowClicked = !isStepButtonClicked;

  let minStepNumber = state.minStepNumber;

  //A step button is directly clicked, simply change active step number and calculate new "minStepNumber"
  if (isStepButtonClicked) {
    if (number <= maxStepCount) {
      if (!setStepsComplete(steps, activeStepNumber, number, autocompletePreviousSteps)) {
        return;
      }
      if (number < maxStepCount) {
        activeStepNumber = number + 1;
      }
      if (!arrowAsCarousel && activeStepNumber <= minStepNumber) {
        minStepNumber = activeStepNumber - 1;
      }
      minStepNumber = getMinStepNumberInRange(minStepNumber, activeStepNumber, pageSize, maxStepCount, true);
    }
  }

  //Right arrow is clicked, either change active step number (includes setting previous steps complete...) or change minStepNumber ("Carousel navigation")
  if (isArrowClicked) {
    if (!arrowAsCarousel) {
      if (activeStepNumber < maxStepCount) {
        if (autocompletePreviousSteps) {
          if (!setStepsComplete(steps, activeStepNumber, activeStepNumber, autocompletePreviousSteps)) {
            return;
          }
        }
        activeStepNumber += 1;
      }
      minStepNumber = getMinStepNumberInRange(minStepNumber, activeStepNumber, pageSize, maxStepCount, true);
    } else {
      if (minStepNumber + pageSize <= maxStepCount) {
        minStepNumber = minStepNumber + 1;
      }
    }
  }

  //If we do not navigate to the url directly, simply update state with new values
  if ((isArrowClicked && arrowAsCarousel) || !navigateToStepUrl(steps[activeStepNumber]?.url)) {
    updateState(steps, activeStepNumber, minStepNumber);
  }
};
