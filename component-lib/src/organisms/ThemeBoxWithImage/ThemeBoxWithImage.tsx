import React from 'react';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    id?: string;
    isExpanded?: boolean;
    imageSrc?: string;
    heading?: string;
};

type State = any;

/**
 * Status: *in progress*
 * Category: Accordion
 *
 * Box to display a theme with a header image.
 **/
export default class ThemeBoxWithImage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isExpanded: this.props.isExpanded,
    };
  }

  handleBoxClick = () => {
    this.setState({ isExpanded: true });
  };

  handleIconClick = (e: any) => {
    e.stopPropagation();
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <div
        className={`theme-box theme-box-with-image${isExpanded ? ' theme-box--open' : ''}`}
        role="button"
        onClick={this.handleBoxClick}
        tabIndex={isExpanded ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={this.props.id}
      >
        <img className="theme-box-with-image__image" src={this.props.imageSrc} />
        <div className="theme-box-with-image__text-container">
          <h2 className="theme-box-with-image__heading heading heading--level-2 heading--pebble">
            {this.props.heading}
          </h2>
          <section className="theme-box-with-image__content" id={this.props.id}>
            {this.props.children}
          </section>
          <div
            className="theme-box-with-image__icon"
            role="button"
            tabIndex={isExpanded ? 0 : -1}
            aria-controls={this.props.id}
            onClick={this.handleIconClick}
          >
            <SvgIcon className="theme-box-with-image__icon-box" iconName="ico_dropArrow" color="purple" />
          </div>
        </div>
      </div>
    );
  }
}
