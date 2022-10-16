import { Step } from '../Models/Step';

const onValidateStep = (steps: Step[], number: number) => {
  //Step already completed? Just continue? Or revalidate if input has changed? Or loop over all steps and validate previous ones...
  if (steps[number].isComplete == true) {
    return true;
  }
  return confirm("Complete this step, I mean, you've validated it?") == true;
};

export const StepDataChildrenAsHtml = () => {
  return [
    {
      title: 'Step 1 Long title text here',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 1</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete1</button>',
    },
    {
      title: 'Step 2 Long title text here!',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 2</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete2</button>',
    },
    {
      title: 'Step 3 Has validation on its step',
      url: '',
      isComplete: false,
      onValidateStep: onValidateStep,
      children:
        '<h1>Hello 3</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete3</button>',
    },
    {
      title: 'Step 4 Long title text here',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 4</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete4</button>',
    },
    {
      title: 'Step 5 Long title text here',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 5</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete5</button>',
    },
    {
      title: 'Step 6 Long title text here',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 6</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete6</button>',
    },
    {
      title: 'Step 7 Long title text her!!',
      url: '',
      children:
        '<h1>Hello 7</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete7</button>',
    },
    {
      title: 'Step 8 Long title text here',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 8</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete8</button>',
    },
  ] as Step[];
};
