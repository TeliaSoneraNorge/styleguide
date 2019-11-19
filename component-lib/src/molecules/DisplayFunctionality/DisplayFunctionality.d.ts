import * as React from 'react';

export interface DisplayFunctionalityImgs {
    img?: string;
    imgAlt?: string;
}

export interface DisplayFunctionalityProps {
    imgs?: DisplayFunctionalityImgs[];
    reverse?: boolean;
    device?: string;
    deviceImageUrl?: string;
}

export default class DisplayFunctionality extends React.Component<DisplayFunctionalityProps, any> {
    render(): JSX.Element;

}
