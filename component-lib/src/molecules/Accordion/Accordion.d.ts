import * as React from 'react';

export interface AccordionProps {
    isExpanded?: boolean;
    id?: string;
    title?: React.ReactNode;
    accordionRef?: any;
    children?: React.ReactNode;
    icon?: string;
    text?: string;
    button?: string;
}

export default class Accordion extends React.Component<AccordionProps, any> {
    render(): JSX.Element;

}
