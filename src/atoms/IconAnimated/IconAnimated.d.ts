import * as React from 'react';

declare interface IconAnimatedProps {
  style: {
    height: number;
    width: number;
  };
  json?: any;
}

export default class IconAnimated extends React.Component<IconAnimatedProps, any> {
  render(): JSX.Element;
}
