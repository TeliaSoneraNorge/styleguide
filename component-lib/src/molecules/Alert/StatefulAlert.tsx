import React from 'react';

import Alert from './Alert';

type Props = {
    kind?: 'positive' | 'negative' | 'info' | 'warning';
    size?: 'large';
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    minimizedText?: string;
    links?: {
        text?: string;
        url?: string;
    }[];
};

type State = any;

export default class StatefulAlert extends React.Component<Props, State> {
  state = { isOpen: true };

  onClose = () => {
    this.setState({ isOpen: false });

    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  onOpen = () => {
    this.setState({ isOpen: true });

    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  render() {
    return <Alert {...this.props} onOpen={this.onOpen} onClose={this.onClose} isOpen={this.state.isOpen} />;
  }
}
