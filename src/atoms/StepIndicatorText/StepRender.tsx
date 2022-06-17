import React from 'react';
import classnames from 'classnames';
import { CheckMarkIcon } from '../Icon';

interface Props {
  number: number;
  isActive: boolean;
  isComplete: boolean;
  title: string;
  url: string;
  onActivateStep: any;
}

export const StepRender = (props: Props) => {
  const { number, isActive, isComplete, title, url, onActivateStep } = props;

  return (
    <li className="step-indicator__wrapper" key={`step-indicator-step-${isActive}`}>
      <span>
        {title} {isActive} {isComplete} {url} number: {number}
      </span>
    </li>
  );
};
