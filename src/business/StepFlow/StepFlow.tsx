import React, { useState, useEffect, isValidElement } from 'react';
import { StepFlowHeader } from './StepFlowHeader';
import { StepFlowMenu } from './StepFlowMenu';
import { StepFlowFooter } from './StepFlowFooter';
import { Labels } from './types';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { useFocusTrap } from '../../utils/useFocusTrap';
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

  /**
   * Displayed to the right on large screens,
   * and at the bottom of each step on small screens.
   */
  additionalContent?: React.ReactNode;
};

export const StepFlow = (props: Props) => {
  const { container } = useFocusTrap();

  const [step, setStep] = useState(props.initialStep ?? 0);
  const menuBreakpoint = useBreakpoint('lg');
  const additionalContentBreakpoint = useBreakpoint('xxl');

  const singleStep = React.Children.count(props.children) === 1;
  const children = React.Children.toArray(props.children);
  const initialStep = children[step];

  const [form, setForm] = useState<React.ReactElement | null>(isValidElement(initialStep) ? initialStep : null);
  const [isValid, setIsValid] = useState(isValidElement(initialStep) ? initialStep.props.isValid : false);

  const isLastStep = step === children.length - 1;

  const renderAdditionalContentRight = additionalContentBreakpoint && !isLastStep;
  const renderAdditionalContentInStep = !additionalContentBreakpoint && !isLastStep;

  useEffect(() => {
    const newStep = children[step];
    setForm(isValidElement(newStep) ? newStep : null);
    setIsValid(isValidElement(newStep) ? newStep.props.isValid : false);
  }, [step, props.children]);

  return (
    <div className="telia-step-flow" ref={container}>
      <StepFlowHeader
        labels={props.labels}
        title={props.title}
        description={props.description}
        onCancel={props.onCancel}
        rightContent={props.headerContent}
      />

      <div className="telia-step-flow__main">
        {menuBreakpoint && !singleStep && <StepFlowMenu setStep={setStep} currentStep={step} steps={props.children} />}
        <div className="telia-step-flow__main-form">
          {form}
          {renderAdditionalContentInStep ? props.additionalContent : null}

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
        {renderAdditionalContentRight ? <div className="telia-step-flow__right">{props.additionalContent}</div> : null}
      </div>
    </div>
  );
};
