import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
    static propTypes = {
        isExpanded: PropTypes.bool,
        id: PropTypes.string,
        title: PropTypes.node,
        accordionRef: PropTypes.any,
        children: PropTypes.node,
        imageUrl: PropTypes.string,
        imageAlt: PropTypes.string
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
                        {
                            this.props.imageUrl &&
                            <img className="accordion__image" src={this.props.imageUrl} alt={this.props.imageAlt} />
                        }
                        {this.props.title}
                    </button>
                </h3>
                <div className="accordion__panel rich-text-area" id={this.props.id}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Accordion;