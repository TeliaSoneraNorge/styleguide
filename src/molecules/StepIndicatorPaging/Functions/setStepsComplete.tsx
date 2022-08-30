import { Step } from '../Models/Step';

export const setStepsComplete = (
  steps: Step[],
  currentActiveNumber: number,
  activeNumber: number,
  completePreviousSteps: boolean
) => {
  steps[currentActiveNumber].isComplete = !steps[currentActiveNumber].onValidateStep
    ? true
    : steps[currentActiveNumber].onValidateStep(steps, currentActiveNumber) == true;
  if (!steps[currentActiveNumber].isComplete) {
    return false;
  }

  if (completePreviousSteps == true) {
    steps.forEach((step, i) => {
      if (i < activeNumber) {
        step.isComplete = true;
      }
    });
  }
  return true;
};
