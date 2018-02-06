import React from 'react';

function classNames(className, color, size, canExpand, isExpanded) {
    const classNames = ['box'];
    if (className) {
        classNames.push(className);
    }
    if (color) {
        classNames.push(`box--${color}`);
    }
    if (size) {
        classNames.push(`box--${size}`);
    }
    if (canExpand) {
        classNames.push(`box--expandable`);
    }
    if (isExpanded) {
        classNames.push('box--is-expanded');
    }
    return classNames.join(' ');
}

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

        if (e.type === "click" || (e.type === "keyup" && (e.which === 13 || e.which === 32))) {
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
        return (
            <article
                id={this.props.id}
                className={classNames(this.props.className, this.props.color, this.props.size, this.props.canExpand, this.state.isExpanded)}
                onClick={this.boxContainerClick}
                onKeyUp={this.boxContainerClick}
                aria-expanded={this.props.canExpand ? this.state.isExpanded : null}
                tabIndex={this.props.canExpand && !this.state.isExpanded ? "0" : null}>
                {this.props.isShowingFeature ?
                    <div className="box__speech-bubble">Some speech bubble text!</div> : null}
                {this.state.isExpanded ?
                    <button className="box__close-expanded-info" onClick={this.closeBoxClick} aria-controls={this.props.id}>
                        <span className="box__close-text">LUKK</span>
                        <i className="box__close-icon"></i>
                    </button> : null}
                {this.props.children}
            </article>
        );
    }
}