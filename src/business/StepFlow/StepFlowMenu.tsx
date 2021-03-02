import React from 'react';
import cn from 'classnames';

type Props = {
  steps: React.ReactNode;
  currentStep?: number;
  setStep: (step: number) => void;
};
export const StepFlowMenu = (props: Props) => {
  return (
    <div className="telia-step-flow--menu">
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
      className={cn('telia-step-flow--menu--item ', {
        'telia-step-flow--menu-item__disabled': props.disabled,
        'telia-step-flow--menu-item__active': props.active && !props.disabled,
      })}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};
