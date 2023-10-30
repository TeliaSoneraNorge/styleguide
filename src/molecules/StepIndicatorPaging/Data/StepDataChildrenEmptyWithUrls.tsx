import { Step } from '../Models/Step';

export const StepDataChildrenEmptyWithUrls = () => {
  return [
    {
      title: 'Step 1 Long title text here',
      url: '#GoTo2',
    },
    {
      title: 'Short step2',
      url: '#GoTo3',
    },
    {
      title: 'Step 3 Click to navigate!',
      url: 'https://www.telia.no',
    },
    {
      title: 'Step 4 Long title text here',
      url: '#GoTo4',
    },
    {
      title: 'Step 5 Long title text here',
      url: '#GoTo5',
    },
    {
      title: 'Step 6 Long title text here',
      url: '#GoTo6',
    },
    {
      title: 'Step 7 Long title text here',
      url: '#GoTo7',
    },
    {
      title: 'Step 8 Long title text here',
      url: '#GoTo8',
    },
  ] as Step[];
};
