import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export default class FeatureBox extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        iconSvg: PropTypes.node,
        heading: PropTypes.string,
        text: PropTypes.string,
        url: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="feature-box">
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