import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    isExpanded?: boolean;
    canExpand?: boolean;
    id?: string;
    iconSvg?: React.ReactNode;
    iconAnimated?: React.ReactNode;
    heading?: string;
};

type State = any;

/**
 * Status: *Finished*
 * Category: Accordion
 */
export default class ThemeBox extends React.Component<Props, State> {
  boxContainerClick: any;
  closeBoxClick: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      isExpanded: this.props.isExpanded,
    };

    if (this.props.canExpand) {
      this.boxContainerClick = this.boxContainerClick.bind(this);
      this.closeBoxClick = this.closeBoxClick.bind();
    }
  }

  handleBoxClick = () => {
    this.setState({ isExpanded: true });
  };

  handleBoxClose = (e: any) => {
    e.stopPropagation();
    this.setState({ isExpanded: false });
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <div
        className={`theme-box${isExpanded ? ' theme-box--open' : ''} heading-link`}
        role="button"
        onClick={this.handleBoxClick}
        tabIndex={isExpanded ? -1 : 0}
        aria-expanded={isExpanded}
        aria-controls={this.props.id}
      >
        <div className="theme-box__header heading-link--focus-area">
          <button
            className="theme-box__close-expanded-info"
            onClick={this.handleBoxClose}
            aria-controls={this.props.id}
          >
            <span className="theme-box__close-text">LUKK</span>
            <SvgIcon className="theme-box__close-icon" iconName="ico_delete" />
          </button>
          {this.props.iconSvg && <div className="theme-box__icon">{this.props.iconSvg}</div>}
          {this.props.iconAnimated && <div className="theme-box__icon-animated">{this.props.iconAnimated}</div>}
          <h2 className="theme-box__heading heading heading--level-2 heading--pebble">
            {this.props.heading}
            <hr className="horizontal-rule horizontal-rule--short" />
          </h2>
        </div>
        <section className="theme-box__content" id={this.props.id}>
          {this.props.children}
        </section>
      </div>
    );
  }
}
