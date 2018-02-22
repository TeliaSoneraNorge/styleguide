import React from 'react';

import Label from '../../atoms/Label/Label';

function classNames(labelMode) {
    const classNames = ['dropdown-list-with-label__select'];

    if (labelMode === 'text-to-right') {
        classNames.push(`dropdown-list-with-label__select--half`);
    }

    return classNames.join(' ');
}

/**
 * Status: *in progress*.
 *
 * TODO: Label accessibility. It's recommended to use aria-label on form elements when a label is not visible on the screen.
 **/
export default class DropDownListWithLabel extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Label className="dropdown-list-with-label" mode={this.props.labelMode || 'text-on-top'}>
                {this.props.label ? <span className="dropdown-list-with-label__label-text">{this.props.label}</span> : null}
                <select className={classNames(this.props.labelMode)}
                    defaultValue={this.props.selectedOption} onChange={this.props.changeSelectedOption}>
                    {this.props.options.map((option) =>
                        <option className="dropdown-list-with-label__option" key={option}>
                            {option}
                        </option>)}
                </select>
            </Label>
        );
    }
}