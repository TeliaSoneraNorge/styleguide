import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * A Box component has a default size, but can be made into a small or a medium box.
 * It serves as a container with a colored border, and do not have any padding since the content
 * should be able to control that part.
 *
 * One or more Boxes can be used inside a <a href="/components/molecules#BoxGrid">BoxGrid</a> component.
 */
export default class Box extends React.Component {
    static propTypes = {
        isExpanded: PropTypes.bool,
        canExpand: PropTypes.bool,
        color: PropTypes.oneOf(['purple', 'pink', 'light-orange', 'green', 'blue', 'teal', 'grey']),
        size: PropTypes.oneOf(['small', 'medium']),
        speechBubbleText: PropTypes.string,
        /** close button aria-controls */
        id: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: this.props.isExpanded ? this.props.isExpanded : false
        };

        if (this.props.canExpand) {
            this.boxContainerClick = this.boxContainerClick.bind(this);
            this.closeBoxClick = this.closeBoxClick.bind(this);
        }
    }
    boxContainerClick(e) {
        if (!this.props.canExpand) return;

        if (e.type === 'click' || (e.type === 'keyup' && (e.which === 13 || e.which === 32))) {
            if (!this.state.isExpanded) {
                this.setState({ isExpanded: true });
            }
        }
    }
    closeBoxClick(e) {
        e.stopPropagation();
        this.setState({ isExpanded: false });
    }
    render() {
        const { className, color, size, canExpand } = this.props;
        const { isExpanded } = this.state;

        return (
            <article
                id={this.props.id}
                className={classnames('box', {
                    [className]: className,
                    [`box--${color}`]: color,
                    [`box--${size}`]: size,
                    'box--expandable': canExpand,
                    'box--is-expanded': isExpanded,
                })}
                onClick={this.boxContainerClick}
                onKeyUp={this.boxContainerClick}
                aria-expanded={this.props.canExpand ? this.state.isExpanded : null}
                tabIndex={this.props.canExpand && !this.state.isExpanded ? '0' : null}>
                {this.props.speechBubbleText ?
                    <div className="box__speech-bubble">{this.props.speechBubbleText}</div>
                    : <div className="box__speech-bubble box__speech-bubble--empty"></div>}
                {this.state.isExpanded ?
                    <button className="box__close-expanded-info" onClick={this.closeBoxClick} aria-controls={this.props.id}>
                        <span className="box__close-text">LUKK</span>
                        <i className="box__close-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                                <path fill-rule="evenodd" d="M13.773 10.502l6.546 6.546c.907.907.912 2.366.005 3.273a2.318 2.318 0 0 1-3.278 0L10.5 13.775l-6.546 6.546a2.318 2.318 0 0 1-3.278 0 2.313 2.313 0 0 1 .005-3.273l6.546-6.546L.68 3.956A2.309 2.309 0 0 1 .676.682a2.314 2.314 0 0 1 3.278 0L10.5 7.23 17.046.682A2.309 2.309 0 0 1 20.32.678a2.318 2.318 0 0 1 0 3.278l-6.546 6.546z"/>
                            </svg>
                        </i>
                    </button> : null}
                {this.props.children}
            </article>
        );
    }
}