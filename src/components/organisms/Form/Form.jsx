import React from 'react';

/**
 *
 * The layout of a form is created by nesting `form__row` and `form__column`.
 * Inside each column you add the components you need for creating your own form.
 *
 * More form examples on the <a href="/forms">forms sample page</a>.
 */
const Form = ({ action, method, onSubmit, children }) =>
    <form className="form" action={action} method={method} onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
            {children}
        </fieldset>
    </form>;

const FormRow = ({ children }) =>
    <div className="form__row">
        {children}
    </div>;

const FormColumn = ({ size, children }) =>
    <div className={`form__column ${size ? 'form__column--' + size : ''}`}>
        {children}
    </div>;

const FormSuccessMessage = ({ children }) =>
    <div className="form__success">
        {children}
    </div>;

Form.FormRow = FormRow;
Form.FormColumn = FormColumn;
Form.FormSuccessMessage = FormSuccessMessage;

export default Form;