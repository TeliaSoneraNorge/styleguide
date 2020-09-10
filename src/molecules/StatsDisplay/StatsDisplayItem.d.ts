import * as React from 'react';

declare interface StatsDisplayItemProps {
  iconSvg?: React.ReactNode;
  useIcon?: boolean;
  heading?: string;
  text?: string;
}

export default class StatsDisplayItem extends React.Component<StatsDisplayItemProps, any> {
  render(): JSX.Element;
}
