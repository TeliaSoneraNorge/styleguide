import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';

/**
 * Status: *finished*.
 * Category: Boxes
**/
export default class FeatureBox extends React.Component {
    static propTypes = {
        iconSvg: PropTypes.node,
        heading: PropTypes.string,
        text: PropTypes.string,
        url: PropTypes.string,
        hasBorder: PropTypes.bool,
        size: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classnames(`feature-box feature-box--${this.props.size ? this.props.size: 'medium'}`, {
                [this.props.className]: this.props.className,
                'feature-box--border': this.props.hasBorder,
            })}>
                <div className="feature-box__icon">{this.props.iconSvg}</div>
                <h2 className="feature-box__heading heading heading--level-2">
                    {this.props.heading}
                </h2>
                <Paragraph>
                    {this.props.text}
                </Paragraph>
                <a className="button button--small" href={this.props.url}>Les mer</a>
            </div>
        );
    }
}