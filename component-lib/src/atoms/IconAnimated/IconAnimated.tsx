import React from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

type Props = {
    json?: any;
    style?: any; // TODO: '{{ }}'
};

/**
 * Status: *finished*.
 * Category: Style
 */

export default class IconAnimated extends React.Component<Props> {
  container: any;

  constructor(props: Props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    lottie.loadAnimation({
      container: this.container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: this.props.json,
    });
  }

  render() {
    return <div className="icon-animated-container" ref={this.container}></div>;
  }
}
