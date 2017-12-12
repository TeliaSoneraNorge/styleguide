import React from 'react';

function classNames(isTextBox, formTypeClassName) {
    const classNames = ['label'];

    if (isTextBox) {
        classNames.push('label--text-box')
    }

    if (formTypeClassName) {
        classNames.push(formTypeClassName);
    }

    return classNames.join(' ');
}

/**
 * Status: *in progress*.
 *
 * Labels used with TextBox should appear on top of input element and be in grey color.
 * 
 * Labels used with CheckBox, RadioButton and DropDownList (if labelled at all) should appear
 * to the right of the input element and be in black color.
 *
 * TODO: Add correct examples with new CheckBox and TextBox components.
 */
export default class Label extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <label className={classNames(this.props.isTextBox, this.props.formTypeClassName)}>
                {this.props.children}
            </label>
        );
    }
}
