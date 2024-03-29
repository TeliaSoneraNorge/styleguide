import React from 'react';

type Props = {
  title?: string;
  description?: string;
  /**
   * If step is valid (used by StepFlow)
   */
  isValid: boolean;
  /**
   * Disable the step in the StepFlowMenu (used by StepFlow)
   */
  disabled?: boolean;
  children?: React.ReactNode;
};

export const StepFlowStep: React.FC<Props> = (props) => {
  return (
    <div className="telia-step-flow__step">
      {props.title || props.description ? (
        <div className="telia-step-flow__step-header">
          <h2>{props.title}</h2>
          {props.description && <div className="telia-step-flow__step-header__description">{props.description}</div>}
        </div>
      ) : null}
      {props.children}
    </div>
  );
};
