import React from 'react';
import classnames from 'classnames';
import Paragraph from '../../atoms/Paragraph/Paragraph';

type Props = {
    iconSvg?: React.ReactNode;
    heading?: string;
    text?: string;
    url?: string;
    hasBorder?: boolean;
    size?: string;
};

/**
 * Status: *finished*.
 * Category: Boxes
 **/
export default class FeatureBox extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classnames(`feature-box feature-box--${this.props.size ? this.props.size : 'medium'}`, {
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
          [this.props.className]: this.props.className,
          'feature-box--border': this.props.hasBorder,
        })}
      >
        <div className="feature-box__icon">{this.props.iconSvg}</div>
        <h2 className="feature-box__heading heading heading--level-2">{this.props.heading}</h2>
        {/* @ts-expect-error ts-migrate(2559) FIXME: Type '{ children: string | undefined; }' has no pr... Remove this comment to see the full error message */}
        <Paragraph>{this.props.text}</Paragraph>
        <a className="button button--small" href={this.props.url}>
          Les mer
        </a>
      </div>
    );
  }
}
