import React from 'react';
import { Button } from '../Button';
import { FooterLabels } from './types';

type Props = {
  isLastStep: boolean;
  nextDisabled: boolean;
  nextStep: () => void;
  singleStep: boolean;
  previousDisabled?: boolean;
  previousStep?: () => void;
  labels?: FooterLabels;
};

export const StepFlowFooter = (props: Props) => {
  return (
    <div className="telia-step-flow__footer">
      {!props.singleStep && (
        <Button
          kind="secondary"
          label={props.labels?.back ?? 'Tilbake'}
          icon="arrow-large-left"
          onClick={props.previousStep}
          disabled={props.previousDisabled}
          size="compact"
        />
      )}
      <div style={props.singleStep ? { marginLeft: 'auto' } : {}}>
        <Button
          kind="primary"
          label={props.isLastStep ? props.labels?.submitText ?? 'Send' : props.labels?.next ?? 'Neste'}
          icon={props.isLastStep ? 'check-mark' : 'arrow-large-right'}
          iconRight
          onClick={props.nextStep}
          disabled={props.nextDisabled}
          size="compact"
        />
      </div>
    </div>
  );
};
