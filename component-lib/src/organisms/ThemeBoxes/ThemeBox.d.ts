import * as React from 'react';

export interface ThemeBoxProps {
    isExpanded?: boolean;
    canExpand?: boolean;
    id?: string;
    iconSvg?: React.ReactNode;
    iconAnimated?: React.ReactNode;
    heading?: string;
    children?: React.ReactNode;
}

export default class ThemeBox extends React.Component<ThemeBoxProps, any> {
    render(): JSX.Element;

}
