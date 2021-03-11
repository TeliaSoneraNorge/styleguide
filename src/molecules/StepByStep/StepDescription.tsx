import React from 'react';
import classnames from 'classnames';
import { StepIcon, Props as IconProps } from './StepIcon';

interface Props extends IconProps {
  /** Short step description. */
  children?: React.ReactNode;
  /** Step heading. */
  heading: string;

  className?: string;

  customIcon?: React.ReactNode;
}

export const StepDescription = (props: Props) => {
  return (
    <React.Fragment>
      {props.customIcon ? props.customIcon : <StepIcon {...props} />}
      <div className={classnames('step-by-step__text', props.className)}>
        <h2 className="step-by-step__heading heading heading--level-2">{props.heading}</h2>
        {props.children && <div className="step-by-step__description">{props.children}</div>}
      </div>
    </React.Fragment>
  );
};
