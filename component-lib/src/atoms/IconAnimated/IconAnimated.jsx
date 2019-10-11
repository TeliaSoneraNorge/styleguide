import React from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web/build/player/lottie_light';

/**
 * Status: *finished*.
 * Category: Style
 */

export default class IconAnimated extends React.Component {
    static propTypes = {
        json: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.container = React.createRef();
    }

    componentDidMount() {
        lottie.loadAnimation({
            container: this.container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: this.props.json
        });
    }

    render() {
        return (<div className="icon-animated-container" ref={this.container}></div>);
    }
};

