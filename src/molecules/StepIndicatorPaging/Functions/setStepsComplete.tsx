import { Step } from '../Models/Step';

export const setStepsComplete = (
  steps: Step[],
  currentActiveNumber: number,
  clickedNumber: number,
  autocompletePreviousSteps: boolean
) => {
  const validateStep = steps[currentActiveNumber].onValidateStep;

  const isStepValid = !validateStep ? true : validateStep(steps, currentActiveNumber);

  if (!isStepValid) {
    return false;
  }

  steps[currentActiveNumber].isComplete = isStepValid;

  if (autocompletePreviousSteps) {
    steps.forEach((step, i) => {
      if (i < clickedNumber) {
        step.isComplete = true;
      }
    });
  }
  return true;
};
