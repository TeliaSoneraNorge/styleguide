import React from 'react';
import classnames from 'classnames';
import { StepIcon, Props as IconProps } from './StepIcon';
import { Icon } from '../../atoms/Icon';

interface Props extends IconProps {
  /** Short step description. */
  children?: React.ReactNode;
  /** Step heading. */
  heading: React.ReactNode;

  className?: string;

  icon?: React.ReactNode;
}

export const StepDescription = (props: Props) => {
  return (
    <React.Fragment>
      <StepIcon {...props}>{props.icon}</StepIcon>
      <div className={classnames('step-by-step__text', props.className)}>
        {typeof props.heading === 'string' ? (
          <h2 className="step-by-step__heading heading heading--level-2">{props.heading}</h2>
        ) : (
          <div>{props.heading}</div>
        )}
        {props.children && <div className="step-by-step__description">{props.children}</div>}
      </div>
    </React.Fragment>
  );
};
