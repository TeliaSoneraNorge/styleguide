import { getMinStepNumber } from './getMinStepNumber';

export const getMinStepNumberInRange = (
  currentMinStepNumber: number,
  number: number,
  pageSize: number,
  maxStepCount: number,
  forward: boolean
) => {
  const minDifference = Math.abs(currentMinStepNumber - number);
  const maxDifference = Math.abs(currentMinStepNumber + pageSize - number);
  const inRange = minDifference > 1 && maxDifference > 1;

  if (inRange) {
    return currentMinStepNumber;
  }

  return getMinStepNumber(number, pageSize, maxStepCount, forward);
};
