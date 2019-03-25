import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../atoms/Button/Button';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**Status: Add possibility for passing objects to the right content area */

export default class Accordion extends React.Component {
    static propTypes = {
        isExpanded: PropTypes.bool,
        id: PropTypes.string,
        title: PropTypes.node,
        accordionRef: PropTypes.any,
        children: PropTypes.node,
        icon: PropTypes.string,
        text: PropTypes.string,
        button: PropTypes.string,
    };

    accordionHeaderClicked = () => {
        this.props.toggleIsExpanded();
    };

    render() {
        return (
            <section
                className={`accordion${this.props.isExpanded ? ' accordion--open' : ''}`}
                ref={this.props.accordionRef}>
                <h3 className={`accordion__header${this.props.button !== null ? ' accordion__header--with-button' : ''} heading heading--level-3`}>
                    <button
                        className="accordion__header-button"
                        aria-expanded={this.props.isExpanded}
                        aria-controls={this.props.id}
                        onClick={this.accordionHeaderClicked}>
                        {this.props.icon !== null &&
                        <SvgIcon className="accordion__icon" iconName={this.props.icon} />
                        }
                        <div className={ classnames('accordion__header-button--text-box',{ 'accordion__header-button--text-box-no-icon': this.props.icon === null }) }>
                            {this.props.title}
                            {this.props.text !== null &&
                            <div className="accordion__header-button--text-box-text">{this.props.text}</div>
                            }
                        </div>
                    </button>
                    <SvgIcon className="accordion__header-icon" iconName="ico_dropArrow" color="purple" />
                </h3>
                {this.props.button !== null && 
                    <Button type="button" className="accordion__button" text={this.props.button}></Button>
                }
                <div className="accordion__panel rich-text" id={this.props.id}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}
