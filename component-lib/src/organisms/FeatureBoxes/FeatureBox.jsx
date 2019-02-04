import React from 'react';
import PropTypes from 'prop-types';

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
            <div className="feature-box"
                aria-controls={this.props.id}>
                <div className="feature-box__header">
                    <div className="feature-box__icon">{this.props.iconSvg}</div>
                    <h2 className="feature-box__heading heading heading--level-2 heading--pebble">
                        {this.props.heading}
                    </h2>
                </div>
                <section className="feature-box__content" id={this.props.id}>
                    {this.props.text}
                </section>
                <div className="feature-box__button">
                    <a className="button button button--small" href={this.props.url}>Les mer</a>
                </div>
            </div>
        );
    }
}