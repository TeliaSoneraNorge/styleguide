import React, { useState, useEffect, isValidElement } from 'react';
import { StepFlowHeader } from './StepFlowHeader';
import { StepFlowMenu } from './StepFlowMenu';
import { StepFlowFooter } from './StepFlowFooter';
import { Labels } from './types';
import { useBreakpoint } from '../../utils/useBreakpoint';
type Props = {
  initialStep?: number;
  /**
   * Main title of the form
   */
  title: string;
  /**
   * Description for the form
   */
  description: string;
  onSubmit: () => void;
  onCancel: () => void;
  /**
   * Pass inn custom labels for the different actions/buttons in the step flow.
   * Enables use of different languages
   */
  labels?: Labels;
  /**
   * Displayed in the StepFlowHeader.
   * Should only be  used for a small component or some additional text
   */
  headerContent?: (stuck: boolean) => React.ReactNode;

  /**
   * Children will be each form step.
   * Each step must be wrapped in a StepWrapper
   */
  children: React.ReactNode;
};

export const StepFlow = (props: Props) => {
  const [step, setStep] = useState(props.initialStep ?? 0);
  const breakpointSm = useBreakpoint('sm');

  const singleStep = React.Children.count(props.children) === 1;

  const [form, setForm] = useState<React.ReactElement>(
    singleStep && isValidElement(props.children) // we need these checks since children can be both a single node and several nodes
      ? props.children.props.isValid
      : props.children?.[step].props.isValid
  );
  const [isValid, setIsValid] = useState(
    singleStep && React.isValidElement(props.children)
      ? props.children.props.isValid
      : props.children?.[step].props.isValid
  );

  const numSteps = React.Children.count(props.children);
  const isLastStep = step === numSteps - 1;

  // Change form when step or forms are updated
  useEffect(() => {
    setForm(singleStep && isValidElement(props.children) ? props.children : props.children?.[step]);
    setIsValid(
      singleStep && isValidElement(props.children) ? props.children.props.isValid : props.children?.[step].props.isValid
    );
  }, [step, props.children]);

  return (
    <div className="telia-step-flow">
      <StepFlowHeader
        labels={props.labels}
        title={props.title}
        description={props.description}
        onCancel={props.onCancel}
        rightContent={props.headerContent}
      />

      <div className="telia-step-flow__main">
        {breakpointSm && !singleStep && <StepFlowMenu setStep={setStep} currentStep={step} steps={props.children} />}
        <div className="telia-step-flow__main-form">
          {form}

          <StepFlowFooter
            isLastStep={isLastStep}
            labels={props.labels}
            nextStep={isLastStep ? props.onSubmit : () => setStep(step + 1)}
            nextDisabled={!isValid}
            singleStep={singleStep}
            {...(!singleStep
              ? {
                  previousStep: () => setStep(step - 1),
                  previousDisabled: step === 0,
                }
              : {})}
          />
        </div>
      </div>
    </div>
  );
};