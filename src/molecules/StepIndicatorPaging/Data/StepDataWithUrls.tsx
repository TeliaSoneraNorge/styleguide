import { Step } from '../Models/Step';

export const StepDataWithUrls = () => {
  return [
    {
      title: 'Step Url 1 Longer title with text',
      url: '#Step1',
      isComplete: false,
      children:
        '<h1>Hello Url 1</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete1</button>',
    },
    {
      title: 'Step Url 2 Longer title with text',
      url: '#Step2',
      isComplete: false,
      children:
        '<h1>Hello 2</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete2</button>',
    },
    {
      title: 'Step Url 3 Longer title with text',
      url: '#Step3',
      isComplete: false,
      onValidateStep: null,
      children:
        '<h1>Hello Url 3</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete3</button>',
    },
    {
      title: 'Step Url 4 Longer title with text',
      url: '#Step4',
      isComplete: false,
      children:
        '<h1>Hello Url 4</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete4</button>',
    },
    {
      title: 'Step Url 5 Longer title with text',
      url: '#Step5',
      isComplete: false,
      children:
        '<h1>Hello Url 5</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete5</button>',
    },
    {
      title: 'Step Url 6 Longer title with text',
      url: '#Step6',
      isComplete: false,
      children:
        '<h1>Hello Url 6</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete6</button>',
    },
    {
      title: 'Step Url 7 Longer title with text',
      url: '#Step7',
      isComplete: false,
      children:
        '<h1>Hello Url 7</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete7</button>',
    },
    {
      title: 'Step Url 8 Longer title with text',
      url: '#Step8',
      isComplete: false,
      children:
        '<h1>Hello Url 8</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete8</button>',
    },
  ] as Step[];
};
