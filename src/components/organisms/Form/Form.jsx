import React from 'react';

/**
 *
 * The layout of a form is created by nesting `form__row` and `form__column`. 
 * Inside each column you add the components you need for creating your own form.
 *
 * More form examples on the <a href="/forms">forms sample page</a>.
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