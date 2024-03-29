import React, { useState, useEffect, isValidElement } from 'react';
import { StepFlowHeader } from './StepFlowHeader';
import { StepFlowMenu } from './StepFlowMenu';
import { StepFlowFooter } from './StepFlowFooter';
import { Labels } from './types';
import { useBreakpoint } from '../../utils/useBreakpoint';
import cn from 'classnames';
import { PageLayout } from '../PageLayout';

type Props = {
  initialStep?: number;
  /**
   * Main title of the form
   */
  title: React.ReactNode;
  /**
   * Description for the form
   */
  description: React.ReactNode;
  onSubmit: () => void;
  onCancel?: () => void;
  /**
   * Pass inn custom labels for the different actions/buttons in the step flow.
   * Enables use of different languages
   */
  labels?: Labels;

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

  /**
   * Displayed on top,
   */
  navBar?: React.ReactNode;

  /**
   * @default 'white'
   */
  color?: 'white' | 'grey';
};

export const StepFlow = (props: Props) => {
  const [step, setStep] = useState(props.initialStep ?? 0);
  const menuBreakpoint = useBreakpoint('lg');
  const additionalContentBreakpoint = useBreakpoint('xxl');

  const singleStep = React.Children.count(props.children) === 1;
  const children = React.Children.toArray(props.children);
  const initialStep = children[step];

  const [form, setForm] = useState<React.ReactElement | null>(isValidElement(initialStep) ? initialStep : null);
  const [isValid, setIsValid] = useState(isValidElement(initialStep) ? initialStep.props.isValid : false);

  const isLastStep = step === children.length - 1;

  const renderAdditionalContentRight = additionalContentBreakpoint && (singleStep || !isLastStep);
  const renderAdditionalContentInStep = !additionalContentBreakpoint && (singleStep || !isLastStep);

  useEffect(() => {
    const newStep = children[step];
    setForm(isValidElement(newStep) ? newStep : null);
    setIsValid(isValidElement(newStep) ? newStep.props.isValid : false);
  }, [step, props.children]);

  return (
    <PageLayout
      className={cn('telia-step-flow', {
        'telia-step-flow--grey': props.color === 'grey',
        'telia-step-flow--with-navbar': props.navBar,
      })}
      navBar={{ component: props.navBar }}
      header={{
        component: (
          <StepFlowHeader
            labels={props.labels}
            title={props.title}
            description={props.description}
            onCancel={props.onCancel}
          />
        ),
      }}
      left={{
        component: menuBreakpoint && !singleStep && (
          <StepFlowMenu setStep={setStep} currentStep={step} steps={props.children} />
        ),
      }}
      body={{
        component: (
          <>
            {form}
            {renderAdditionalContentInStep && props.additionalContent}
          </>
        ),
      }}
      right={{ fixed: true, component: renderAdditionalContentRight && props.additionalContent }}
      footer={{
        fixed: true,
        component: (
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
        ),
      }}
    />
  );
};
