import React from 'react';

function classNames(color, size, isExpanded) {
    const classNames = ['box'];
    if (color) {
        classNames.push(`box--${color}`);
    }
    if (size) {
        classNames.push(`box--${size}`);
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

        this.boxContainerClick = this.boxContainerClick.bind(this);
        this.closeBoxClick = this.closeBoxClick.bind(this);
    }
    boxContainerClick() {
        if (!this.state.isExpanded) {
            this.setState({ isExpanded: true });
        }
    }
    closeBoxClick(e) {
        e.stopPropagation();
        this.setState({ isExpanded: false });
    }
    render() {
        return (
            <article className={classNames(this.props.color, this.props.size, this.state.isExpanded)} onClick={this.boxContainerClick} aria-expanded={this.state.isExpanded} id={this.props.id}>
                {this.state.isExpanded ?
                    <button className="box__close-expanded-info" onClick={this.closeBoxClick} aria-controls={this.props.id}>
                        <span className="box__close-text">LUKK</span>
                        <img className="box__close-image" src="/public/icons/ico_delete.svg" role="presentation" alt="Lukk ekspandert innhold" />
                    </button> : null}
                {this.props.children}
            </article>
        );
    }
}