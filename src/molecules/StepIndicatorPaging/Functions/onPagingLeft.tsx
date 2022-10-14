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
  let activeStepNumber = state.currentActiveStepNumber;
  const isStepButtonClicked = number != null;
  const isArrowClicked = !isStepButtonClicked;

  if (isStepButtonClicked) {
    if (number > 0) {
      activeStepNumber = number - 1;
    }
  }

  if (isArrowClicked) {
    if (arrowAsCarousel) {
      if (activeStepNumber > 0) {
        activeStepNumber -= 1;
      }
    }
  }

  if (isArrowClicked && !arrowAsCarousel) {
    let minStepNumber = state.minStepNumber - 1;
    if (minStepNumber < 0) {
      minStepNumber = 0;
    }
    updateState(state.steps, activeStepNumber, minStepNumber);
  }
  if (!navigateToStepUrl(state.steps[activeStepNumber]?.url)) {
    const minStepNumber = getMinStepNumberInRange(state.minStepNumber, activeStepNumber, pageSize, maxStepCount, false);
    updateState(state.steps, activeStepNumber, minStepNumber);
  }
};
