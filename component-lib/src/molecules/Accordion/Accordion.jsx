import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default class Accordion extends React.Component {
    static propTypes = {
        isExpanded: PropTypes.bool,
        id: PropTypes.string,
        title: PropTypes.node,
        accordionRef: PropTypes.any,
        children: PropTypes.node,
    };

    accordionHeaderClicked = () => {
        this.props.toggleIsExpanded();
    };

    render() {
        return (
            <section
                className={`accordion${this.props.isExpanded ? ' accordion--open' : ''}`}
                ref={this.props.accordionRef}>
                <h3 className="accordion__header heading heading--level-3">
                    <button
                        className="accordion__header-button"
                        aria-expanded={this.props.isExpanded}
                        aria-controls={this.props.id}
                        onClick={this.accordionHeaderClicked}>
                        {this.props.title}
                    </button>
                    <SvgIcon className="accordion__header-icon" iconName="ico_dropArrow" color="purple" />
                </h3>
                <div className="accordion__panel rich-text" id={this.props.id}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}
