import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *Finished*
 * Category: Accordion
 */
export default class ThemeBox extends React.Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
    canExpand: PropTypes.bool,
    id: PropTypes.string,
    iconSvg: PropTypes.node,
    iconAnimated: PropTypes.node,
    heading: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
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

  handleBoxClose = e => {
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
