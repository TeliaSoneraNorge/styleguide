import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Context } from './ModalDialogProvider';
import FocusTrap, { focusableElementsSelector } from './FocusTrap';

const KEY_ESC = 27;

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
    onSubmit,
    submitText,
    onClose,
    closeText,
    ...rest
}) {
    const modalNode = useContext(Context);
    const dialogRef = useRef();

    const returnFocusOnDialogClose = () => {
        const lastFocusedElement = document.activeElement;

        return () => {
            lastFocusedElement.focus();
        }
    }

    const setFocusOnFirstFocusableElement = () => {
        if (!dialogRef.current) return;

        const focusableElements = dialogRef.current.querySelectorAll(focusableElementsSelector);

        if (!focusableElements.length) return;

        focusableElements[0].focus();
    }

    const closeDialog = () => {
        if (onClose) onClose();
        if (!onClose && onSubmit) onSubmit();
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === KEY_ESC)
            closeDialog();
    }

    useEffect(returnFocusOnDialogClose);
    useEffect(setFocusOnFirstFocusableElement);

    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <>
            <FocusTrap
                as="div"
                onKeyDown={handleKeyDown}
                ref={dialogRef}
                className="modal-dialog container container--small"
                role="dialog"
                aria-labelledby={`${name}-heading`}
                aria-describedby={`${name}-description`}
                {...rest}>
                <h2 id={`${name}-heading`} className="modal-dialog__heading">{heading}</h2>
                <section id={`${name}-description`}>
                    {children}
                </section>
                {submitText && <button className="button button--margin-top" onClick={onSubmit}>{submitText}</button>}
                {closeText && <button className="button button--cancel button--margin-top" onClick={onClose}>{closeText}</button>}
            </FocusTrap>
            <div onClick={closeDialog} tabIndex="-1"className="modal-dialog-overlay"/>
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