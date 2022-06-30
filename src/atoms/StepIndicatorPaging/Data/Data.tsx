import { Step } from '../_Step';

const onValidateStep = (steps: Step[], number: number) => {
  return true; //Optional to return anything, must return false to invalidate step navigation
};

export const StepData = () => {
  return [
    {
      title: 'Step 1 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 1</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete1</button>',
    },
    {
      title: 'Step 2 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 2</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete2</button>',
    },
    {
      title: 'Step 3 Longer title with text',
      url: '',
      isComplete: false,
      onValidateStep: onValidateStep,
      children:
        '<h1>Hello 3</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete3</button>',
    },
    {
      title: 'Step 4 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 4</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete4</button>',
    },
    {
      title: 'Step 5 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 5</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete5</button>',
    },
    {
      title: 'Step 6 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 6</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete6</button>',
    },
    {
      title: 'Step 7 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 7</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete7</button>',
    },
    {
      title: 'Step 8 Longer title with text',
      url: '',
      isComplete: false,
      children:
        '<h1>Hello 8</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete8</button>',
    },
  ] as Step[];
};
