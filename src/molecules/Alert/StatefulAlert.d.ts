import * as React from 'react';

export type StatefulAlertKind = 'positive' | 'negative' | 'info' | 'warning';

export type StatefulAlertSize = 'large';

export interface StatefulAlertLinks {
  text?: string;
  url?: string;
}

export interface StatefulAlertProps {
  kind?: StatefulAlertKind;
  size?: StatefulAlertSize;
  onOpen?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
  minimizedText?: string;
  links?: StatefulAlertLinks[];
  minimizable?: boolean;
}

export default class StatefulAlert extends React.Component<StatefulAlertProps, any> {
  render(): JSX.Element;
}
