import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    standalone,
    renderTo,
    headerElement,
    footerElement,
    ...rest
}) {
    const modalNode = renderTo || useContext(Context);
    const dialogRef = useRef();

    const returnFocusOnDialogClose = () => {
        if (standalone) return;

        const lastFocusedElement = document.activeElement;

        return () => {
            if (lastFocusedElement)
                lastFocusedElement.focus();
        }
    }

    const setFocusOnFirstFocusableElement = () => {
        if (!dialogRef.current || standalone) return;

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

    const defaultHeaderElement = <h2 id={`${name}-heading`} className="modal-dialog__heading">{heading}</h2>;
    const defaultFooterElement = (
        <>
            {submitText && <button className="button button--margin-top" onClick={onSubmit}>{submitText}</button>}
            {closeText && <button className="button button--cancel button--margin-top" onClick={onClose}>{closeText}</button>}
        </>
    );

    const renderDialog = (Component, additionalProps = {}) => (
        <Component
            onKeyDown={handleKeyDown}
            ref={dialogRef}
            className={classnames(
                'modal-dialog container',
                'container--small',
                { 'modal-dialog--standalone': standalone })}
            role="dialog"
            aria-labelledby={`${name}-heading`}
            aria-describedby={`${name}-description`}
            {...rest}
            {...additionalProps}>
            {headerElement || defaultHeaderElement}
            <section id={`${name}-description`}>
                {children}
            </section>
            {footerElement || defaultFooterElement}
        </Component>);

    if (standalone) {
        return renderDialog('div')
    }

    if (!modalNode) return null;

    // portals need to be wrapped in a fragment because react-docgen doesn't recognize them
    // as a component ref: https://github.com/reactjs/react-docgen/issues/336
    return (<>
        {ReactDOM.createPortal(
            <>
                {renderDialog(FocusTrap, { as: 'div' })}
                <div onClick={closeDialog} tabIndex="-1" className="modal-dialog-overlay" />
            </>
            , modalNode)}
    </>);
}

ModalDialog.propTypes = {
    name: PropTypes.string.isRequired,
    heading: PropTypes.string,
    children: PropTypes.node,
    onSubmit: PropTypes.func,
    submitText: PropTypes.string,
    onClose: PropTypes.func,
    closeText: PropTypes.string,
    standalone: PropTypes.bool,
    renderTo: PropTypes.any,
    headerElement: PropTypes.element,
    footerElement: PropTypes.element,
};