import React from 'react';

/**
 *
 * Form is created by nesting form\_\_row and form\_\_column to create the structure
 *
 * Form examples <a href="/forms">here</a>.
 */
class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form" action={this.props.action} method={this.props.method} onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}

class FormRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form__row">
                {this.props.children}
            </div>
        );
    }
}

class FormColumn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`form__column ${this.props.size ? 'form__column--' + this.props.size : ''}`}>
                {this.props.children}
            </div>
        );
    }
}

Form.FormRow = FormRow;
Form.FormColumn = FormColumn;

export default Form;