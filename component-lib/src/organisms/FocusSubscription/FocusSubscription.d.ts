import * as React from 'react';

declare interface FocusSubscriptionProps {
  id: string;
  name: string;
  dataAmount: number;
  dataUnit: string;
  price: number;
  color: string;
}

export default class FocusSubscription extends React.Component<FocusSubscriptionProps, any> {
  render(): JSX.Element;
}
