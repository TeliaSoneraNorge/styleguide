import * as React from 'react';

export interface FeatureBoxProps {
    iconSvg?: React.ReactNode;
    heading?: string;
    text?: string;
    url?: string;
    hasBorder?: boolean;
    size?: string;
}

export default class FeatureBox extends React.Component<FeatureBoxProps, any> {
    render(): JSX.Element;

}
