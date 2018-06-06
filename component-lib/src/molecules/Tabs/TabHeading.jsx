import React from 'react';
import classnames from 'classnames';

class TabHeading extends React.Component {

    constructor() {
        super();
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        const { onSelect, index } = this.props;

        if (onSelect) {
            onSelect(index);
        }
    }

    render() {
        const { index, isSelected, heading } = this.props;

        return (
            <li className={classnames(
                'tabs__list-item',
                { 'tabs__list-item--selected': isSelected })}>
                <button
                    onClick={this.onSelect}
                    tabIndex="0"
                    className="link tabs__link">
                    {heading}
                </button>
            </li>
        );
    }
}

export default TabHeading;