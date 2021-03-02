import React from 'react';
import cn from 'classnames';

type Props = {
  steps: React.ReactNode;
  currentStep?: number;
  setStep: (step: number) => void;
};
export const StepFlowMenu = (props: Props) => {
  return (
    <div className="telia-step-flow__menu">
      {React.Children.map(props.steps, (c, i) =>
        React.isValidElement(c) ? (
          <StepFlowMenuItem
            key={i}
            label={c.props.title}
            active={i === props.currentStep}
            disabled={c.props.disabled}
            onClick={() => props.setStep(i)}
          />
        ) : null
      )}
    </div>
  );
};

type MenuItemProps = {
  label: string;
  active: boolean;
  disabled: boolean;
  onClick: () => void;
};

const StepFlowMenuItem = (props: MenuItemProps) => {
  return (
    <div
      className={cn('telia-step-flow__menu-item ', {
        'telia-step-flow__menu-item--disabled': props.disabled,
        'telia-step-flow__menu-item--active': props.active && !props.disabled,
      })}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};
