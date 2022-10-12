import { Step } from '../Models/Step';

export const StepDataChildrenAsHtmlWithUrls = () => {
  return [
    {
      title: 'Step1short',
      url: '#Step1',
      isComplete: false,
      children:
        '<h1>Hello Url 1</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete1</button>',
    },
    {
      title: 'Step 2 Short',
      url: '#Step2',
      isComplete: false,
      children:
        '<h1>Hello 2</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete2</button>',
    },
    {
      title: 'Step Url 3 Long title text here',
      url: '#Step3',
      isComplete: false,
      onValidateStep: null,
      children:
        '<h1>Hello Url 3</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete3</button>',
    },
    {
      title: 'Step Url 4 Long title text here',
      url: '#Step4',
      isComplete: false,
      children:
        '<h1>Hello Url 4</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete4</button>',
    },
    {
      title: 'Step Url 5 Long title text here',
      url: '#Step5',
      isComplete: false,
      children:
        '<h1>Hello Url 5</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete5</button>',
    },
    {
      title: 'Step Url 6 Long title text here',
      url: '#Step6',
      isComplete: false,
      children:
        '<h1>Hello Url 6</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete6</button>',
    },
    {
      title: 'Step Url 7 Long title text here',
      url: '#Step7',
      isComplete: false,
      children:
        '<h1>Hello Url 7</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete7</button>',
    },
    {
      title: 'Step Url 8 Long title text here',
      url: '#Step8',
      isComplete: false,
      children:
        '<h1>Hello Url 8</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Complete8</button>',
    },
  ] as Step[];
};
