import { Step } from '../Models/Step';

export const setStepsComplete = (steps: Step[], number: number, completePreviousSteps: boolean) => {
  if (completePreviousSteps == true) {
    steps.forEach((step, i) => {
      if (i < number) {
        step.isComplete = true;
      }
    });
  }

  steps[number].isComplete = !steps[number].onValidateStep ? true : steps[number].onValidateStep(steps, number) == true;
};
