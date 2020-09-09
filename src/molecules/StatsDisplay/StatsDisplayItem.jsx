import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Paragraph from '../../atoms/Paragraph/Paragraph';

export default class StatsDisplayItem extends React.Component {
  static propTypes = {
    iconSvg: PropTypes.node,
    useIcon: PropTypes.bool,
    heading: PropTypes.string,
    text: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classnames(`stats-display-item`, {
          [this.props.className]: this.props.className,
        })}
      >
        {!this.props.iconSvg !== null && this.props.useIcon ? (
          <div className="stats-display-item__heading">{this.props.iconSvg}</div>
        ) : (
          <Paragraph className="stats-display-item__heading">{this.props.heading}</Paragraph>
        )}
        <Paragraph>{this.props.text}</Paragraph>
      </div>
    );
  }
}
