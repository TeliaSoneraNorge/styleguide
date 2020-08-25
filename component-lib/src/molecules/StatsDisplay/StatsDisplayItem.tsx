import React from 'react';
import classnames from 'classnames';

import Paragraph from '../../atoms/Paragraph/Paragraph';

type Props = {
    iconSvg?: React.ReactNode;
    useIcon?: boolean;
    heading?: string;
    text?: string;
};

export default class StatsDisplayItem extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classnames(`stats-display-item`, {
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
          [this.props.className]: this.props.className,
        })}
      >
        {!this.props.iconSvg !== null && this.props.useIcon ? (
          <div className="stats-display-item__heading">{this.props.iconSvg}</div>
        ) : (
          // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
          <Paragraph className="stats-display-item__heading">{this.props.heading}</Paragraph>
        )}
        {/* @ts-expect-error ts-migrate(2559) FIXME: Type '{ children: string | undefined; }' has no pr... Remove this comment to see the full error message */}
        <Paragraph>{this.props.text}</Paragraph>
      </div>
    );
  }
}
