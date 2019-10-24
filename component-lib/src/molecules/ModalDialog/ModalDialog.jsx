import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Context } from './ModalDialogProvider';

/**
 * Status: *in progress*.
 * Category: Notifications
 *
 * Look at the <a href='#/modal-dialog'>Modal Dialog sample page</a> to see this component in action.
 *
 * TODO:
 ** &lt;div role="dialog"&gt; can be changed to &lt;dialog&gt; when this element is more widely supported
 */

export default function ModalDialog({
    name,
    heading,
    children,
    onClickButton1,
    buttonText1,
    onClickButton2,
    buttonText2,
    ...rest
}) {
    const modalNode = useContext(Context);

    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <>
            <div
                className="modal-dialog container container--small"
                role="dialog"
                aria-labelledby={`${name}-heading`}
                aria-describedby={`${name}-description`}
                {...rest}>
                <h2 id={`${name}-heading`} className="modal-dialog__heading">{heading}</h2>
                <section id={`${name}-description`}>
                    {children}
                </section>
                {buttonText1 && <button className="button button--margin-top" onClick={onClickButton1}>{buttonText1}</button>}
                {buttonText2 && <button className="button button--cancel button--margin-top" onClick={onClickButton2}>{buttonText2}</button>}
            </div>
            <div className="modal-dialog-overlay"/>
        </>
    , modalNode);
}

ModalDialog.propTypes = {
    name: PropTypes.string.isRequired,
    heading: PropTypes.string,
    children: PropTypes.node,
    onClickButton1: PropTypes.func,
    buttonText1: PropTypes.string,
    onClickButton2: PropTypes.func,
    buttonText2: PropTypes.string,
};