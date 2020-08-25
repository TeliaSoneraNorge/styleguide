import React from 'react';
import classnames from 'classnames';

type Props = {
    imgs?: {
        img?: string;
        imgAlt?: string;
    }[];
    reverse?: boolean;
    device?: string;
    deviceImageUrl?: string;
};

type State = any;

/**
 * Status: *finished*
 * Category: Misc
 */
class DisplayFunctionality extends React.Component<Props, State> {

  constructor() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1-2 arguments, but got 0.
    super();

    this.state = {
      index: 0,
    };

    this.onClick = this.onClick.bind(this);
  }
  onClick(i: any) {
    this.setState({ index: i });
  }
  render() {
    return (
      <div
        className={classnames('display-functionality', {
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
          [this.props.className]: this.props.className,
        })}
      >
        <div
          className={classnames('display-functionality__container container container--large container--no-margin', {
            'display-functionality__container--reverse ': this.props.reverse,
          })}
        >
          <div className="display-functionality__col">{this.props.children}</div>
          <div className="display-functionality__col">
            <img className="display-functionality__device" src={this.props.deviceImageUrl} />
            {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
            {this.props.imgs.map((image, i) => {
              return (
                <img
                  key={image.img}
                  src={image.img}
                  alt={image.imgAlt}
                  className={classnames(
                    `display-functionality__image display-functionality__image--${
                      this.props.device ? this.props.device : 'laptop'
                    }`,
                    {
                      'display-functionality__image--hidden': this.state.index !== i,
                    }
                  )}
                />
              );
            })}
            <div className="display-functionality__paging">
              {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
              {this.props.imgs.map((img, i) => {
                return (
                  <span
                    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ img?: string | undefined; imgAlt?: string ... Remove this comment to see the full error message
                    key={img}
                    onClick={() => {
                      this.onClick(i);
                    }}
                    className={classnames('display-functionality__bullet', {
                      'display-functionality__bullet--active': this.state.index === i,
                    })}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayFunctionality;
