import React from 'react';

function classNames(additionalClassName, isUsingGrayText) {
    const classNames = ['label'];

    if (additionalClassName) {
        classNames.push(additionalClassName);
    }

    if (isUsingGrayText) {
        classNames.push(`label--gray-text`);
    }

    return classNames.join(' ');
}

/**
 * Status: *finished*.
 *
 * Standard color is black. Labels used with TextBoxWithLabel, TextAreaWithLabel and DropDownListWithLabel should appear on top of input element and be in grey color.
 */
export default class Label extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <label className={classNames(this.props.className, this.props.isUsingGrayText)}>
                {this.props.text || this.props.children}
            </label>
        );
    }
}
