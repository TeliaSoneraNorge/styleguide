import * as React from 'react';

export interface StepByStepProps {
    /**
     * StepByStep.Step
     */
    children?: React.ReactNode;
    /**
     * Whether this should be interactive or just static.
     */
    interactive?: boolean;
    /**
     * Index of the active step. Use when you want to handle the state on your own. Start at 0.
     */
    selectedIndex?: number;
    /**
     * Handler func triggered when user clicks the icon. Use when you want to handle the state on your own.
     */
    onSelect?: (...args: any[])=>any;
}

export default class StepByStep extends React.Component<StepByStepProps, any> {
    render(): JSX.Element;

}
