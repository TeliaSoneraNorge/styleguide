import { navigateToStepUrl } from './navigateToStepUrl';
import { getMinStepNumberInRange } from './getMinStepNumberInRange';

export const onPagingLeft = (
  maxStepCount: number,
  pageSize: number,
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
    if (number > 0) {
      activeStepNumber = number - 1;
      minStepNumber = getMinStepNumberInRange(minStepNumber, activeStepNumber, pageSize, maxStepCount, false);
    }
  }

  //Left arrow is clicked, either change active step number or change minStepNumber ("Carousel navigation")
  if (isArrowClicked) {
    if (!arrowAsCarousel) {
      if (activeStepNumber > 0) {
        activeStepNumber -= 1;
      }
      minStepNumber = getMinStepNumberInRange(minStepNumber, activeStepNumber, pageSize, maxStepCount, false);
    } else {
      if (minStepNumber > 0) {
        minStepNumber = minStepNumber - 1;
      }
    }
  }

  //If we do not navigate to the url directly, simply update state with new values
  if (!navigateToStepUrl(steps[activeStepNumber]?.url)) {
    updateState(steps, activeStepNumber, minStepNumber);
  }
};
