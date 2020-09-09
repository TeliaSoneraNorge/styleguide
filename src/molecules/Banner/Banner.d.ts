import * as React from 'react';

export interface BannerProps {
  reverse?: boolean;
  img?: string;
  imgAlt?: string;
  grey?: boolean;
}

export default class Banner extends React.Component<BannerProps, any> {
  render(): JSX.Element;
}
