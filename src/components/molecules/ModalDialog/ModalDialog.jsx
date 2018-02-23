import React from 'react';

/**
 * Status: *in progress*.
 *
 * Look at the <a href='/modal-dialog'>Modal Dialog sample page</a> to see this component in action.
 *
 * TODO:
 ** &lt;div role="dialog"&gt; can be changed to &lt;dialog&gt; when this element is more widely supported
 */

const ModalDialog = ({ name, heading, children, onClickButton1, buttonText1, onClickButton2, buttonText2 }) => (
    <div
        className="modal-dialog__content container container--small"
        role="dialog"
        aria-labelledby={`${name}-heading`}
        aria-describedby={`${name}-description`}>
        <h2 id={`${name}-heading`} className="modal-dialog__heading">{heading}</h2>
        <section id={`${name}-description`}>
            {children}
        </section>
        {buttonText1 && <button className="button button--margin-top" onClick={onClickButton1}>{buttonText1}</button>}
        {buttonText2 && <button className="button button--cancel button--margin-top" onClick={onClickButton2}>{buttonText2}</button>}
    </div>
);

export default ModalDialog;