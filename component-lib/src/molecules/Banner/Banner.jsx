import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Status: *finished*.
 *
 * Should be placed in a medium or large container. Never small.
 **/
export default class Banner extends React.Component {
    static propTypes = {
        reverse: PropTypes.bool,
        img: PropTypes.string,
        grey: PropTypes.bool,
        reverse: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ classnames('banner',{
                [this.props.className]: this.props.className,
                'banner--reverse': this.props.reverse,
                'banner--background-grey': this.props.grey
            })}>
                <div className="banner__col banner__content">
                    {this.props.children}
                </div>
                <div className="banner__col">
                    <img className="banner__image" src={this.props.img} />
                </div>
            </div>
        );
    }
}