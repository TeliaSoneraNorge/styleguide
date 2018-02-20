import React from 'react';

/**
 * Status: *in progress*.
 *
 * Look at this sample page to see the Modal in action.
 *
 * TODO:
 *
 * make sample page
 *
 * accessibitlity/tabbing
 *
 * Cross-browser
 *
 * litt runde kanter og skygge på content-boksen
 *
 * &lt;div role="dialog"&gt; can be changed to &lt;dialog&gt; when this element is more widely supported
 */

const ModalDialog = ({ heading, description, buttonText1, buttonText2 }) => (
    <div class="modal-dialog__content container container--small" role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
        <h2 id="dialog1Title" class="modal-dialog__heading">{heading}</h2>
        <section id="dialog1Desc">
            <p>{description}</p>
        </section>
        {buttonText1 && <button class="button button--margin-top">{buttonText1}</button>}
        {buttonText2 && <button class="button button--cancel button--margin-top">{buttonText2}</button>}
    </div>
);

export default ModalDialog;