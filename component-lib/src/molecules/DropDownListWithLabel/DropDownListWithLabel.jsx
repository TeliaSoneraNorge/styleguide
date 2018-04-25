import React from 'react';

import Label from '../../atoms/Label/Label';

function labelClassNames(labelMode) {
    const classNames = ['dropdown-list-with-label'];

    if (labelMode === 'text-to-right') {
        classNames.push(`dropdown-list-with-label--text-to-right`);
    }

    return classNames.join(' ');
}

function dropDownClassNames(labelMode) {
    const classNames = ['dropdown-list-with-label__select'];

    if (labelMode === 'text-to-right') {
        classNames.push(`dropdown-list-with-label__select--half`);
    }

    return classNames.join(' ');
}

/**
 * Status: *finished*.
 *
 **/
export default class DropDownListWithLabel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const isUsingGrayText = (this.props.labelMode !== 'text-to-right');

        return (
            <Label className={labelClassNames(this.props.labelMode)} isUsingGrayText={isUsingGrayText}>
                {this.props.visibleLabel ? <span className="dropdown-list-with-label__label-text">{this.props.label}</span> : null}
                <select
                    className={dropDownClassNames(this.props.labelMode)}
                    defaultValue={this.props.selectedOption}
                    onChange={this.props.changeSelectedOption}
                    aria-label={this.props.visibleLabel ? null : this.props.label}>
                    {this.props.options.map((option) =>
                        <option className="dropdown-list-with-label__option" key={option}>
                            {option}
                        </option>)}
                </select>
            </Label>
        );
    }
}