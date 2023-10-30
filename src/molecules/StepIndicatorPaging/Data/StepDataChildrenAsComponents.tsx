import React from 'react';
import Button from '../../../atoms/Button';

export const StepDataChildrenAsComponents = (onPreviousStepClick: any, onCompleteStepClick: any) => {
  return [
    {
      title: 'Step 1',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 1...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(0)} />
          <Button text={'Next/Complete1'} onClick={() => onCompleteStepClick(0)} />
        </div>
      ),
    },
    {
      title: 'Step 2',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 2...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(1)} />
          <Button text={'Next/Complete2'} onClick={() => onCompleteStepClick(1)} />
        </div>
      ),
    },
    {
      title: 'Step 3',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 3...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(2)} />
          <Button text={'Next/Complete3'} onClick={() => onCompleteStepClick(2)} />
        </div>
      ),
    },
    {
      title: 'Step 4',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 4...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(3)} />
          <Button text={'Next/Complete4'} onClick={() => onCompleteStepClick(3)} />
        </div>
      ),
    },
    {
      title: 'Step 5',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 5...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(4)} />
          <Button text={'Next/Complete5'} onClick={() => onCompleteStepClick(4)} />
        </div>
      ),
    },
    {
      title: 'Step 6',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 6...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(5)} />
          <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(5)} />
        </div>
      ),
    },
    {
      title: 'Step 7',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 7...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(6)} />
          <Button text={'Next/Complete7'} onClick={() => onCompleteStepClick(6)} />
        </div>
      ),
    },
    {
      title: 'Step 8',
      url: '',
      isComplete: false,
      children: (
        <div>
          <h2>Step 8...</h2>
          <Button text={'Prev'} onClick={() => onPreviousStepClick(7)} />
          <Button text={'Next/Complete8'} onClick={() => onCompleteStepClick(7)} />
        </div>
      ),
    },
  ];
};
