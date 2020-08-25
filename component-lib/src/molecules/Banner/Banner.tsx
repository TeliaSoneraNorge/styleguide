import React from 'react';
import classnames from 'classnames';

type Props = {
    reverse?: boolean;
    img?: string;
    imgAlt?: string;
    grey?: boolean;
};

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * Should be placed in a medium or large container. Never small.
 * Should always use white banner on grey background and grey banner on white background.
 **/
export default class Banner extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div
        className={classnames('banner', {
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
          [this.props.className]: this.props.className,
          'banner--reverse': this.props.reverse,
          'banner--background-grey': this.props.grey,
          'banner--background-white': !this.props.grey,
        })}
      >
        <div className="banner__col banner__content">{this.props.children}</div>
        <div className="banner__col">
          <img className="banner__image" src={this.props.img} alt={this.props.imgAlt} />
        </div>
      </div>
    );
  }
}
