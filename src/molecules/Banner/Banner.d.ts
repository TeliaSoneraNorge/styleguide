import * as React from 'react';

export interface BannerProps {
  reverse?: boolean;
  img?: string;
  className?: string;
  imgAlt?: string;
  grey?: boolean;
  children?: React.ReactNode;
}

export default class Banner extends React.Component<BannerProps, any> {
  render(): JSX.Element;
}
