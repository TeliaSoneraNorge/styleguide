export const getMinStepNumber = (number: number, pageSize: number, maxStepCount: number, forward: boolean) => {
  if (number <= 0) {
    return 0;
  }

  const max = maxStepCount - pageSize + 1;

  if (forward) {
    number = number - pageSize + 2;
    if (number < 0) {
      number = 0;
    } else if (number + pageSize > maxStepCount) {
      number = max;
    }
  }

  if (!forward) {
    if (number > max) {
      number = max;
    } else {
      number = number - 1;
    }
  }
  return number;
};
