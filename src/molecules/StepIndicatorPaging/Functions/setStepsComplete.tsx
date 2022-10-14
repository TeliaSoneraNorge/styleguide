import { Step } from '../Models/Step';

export const setStepsComplete = (
  steps: Step[],
  currentActiveNumber: number,
  clickedNumber: number,
  completePreviousSteps: boolean
) => {
  const validateStep = steps[currentActiveNumber].onValidateStep;

  const isComplete = !validateStep ? true : validateStep(steps, currentActiveNumber);

  steps[currentActiveNumber].isComplete = isComplete;

  if (completePreviousSteps == true) {
    steps.forEach((step, i) => {
      if (i < clickedNumber) {
        step.isComplete = true;
      }
    });
  }
  return isComplete;
};
