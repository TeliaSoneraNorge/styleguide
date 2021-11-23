import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Context } from './ModalDialogProvider';
import FocusTrap from '../../atoms/FocusTrap/FocusTrap';
import Button from '../../atoms/Button/Button';
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

function ModalDialog({
  name,
  heading,
  children,
  onSubmit,
  submitDisabled,
  submitText,
  submitKind,
  onClose,
  closeText,
  closeKind,
  standalone,
  focusChildElement,
  renderTo,
  headerElement,
  footerElement,
  size,
  className,
  ...rest
}) {
  const modalNode = renderTo || useContext(Context);
  const dialogRef = useRef();
  const dialogOverlayRef = useRef();

  const returnFocusOnDialogClose = () => {
    if (standalone) return;

    const lastFocusedElement = document.activeElement;

    return () => {
      if (lastFocusedElement) lastFocusedElement.focus();
    };
  };

  const setFocusOnDialog = () => {
    if (!dialogRef.current || standalone || focusChildElement) return;

    dialogRef.current.focus();
  };

  const disableAndResetPageScroll = () => {
    if (standalone) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (dialogOverlayRef.current) {
      dialogOverlayRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  };

  const onOverlayClick = (event) => {
    if (event.target !== dialogOverlayRef.current) return;
    if (onClose) onClose();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === KEY_ESC && onClose) onClose();
  };

  useEffect(returnFocusOnDialogClose, []);
  useEffect(setFocusOnDialog, [dialogRef.current]);
  useEffect(disableAndResetPageScroll, []);

  const defaultHeaderElement = (
    <h2 id={`${name}-heading`} className="modal-dialog__heading">
      {heading}
    </h2>
  );
  const defaultFooterElement = (
    <div className="modal-dialog__footer">
      {closeText && onClose && <Button kind={closeKind} margin="top" onClick={onClose} text={closeText} />}
      {submitText && onSubmit && (
        <Button kind={submitKind} margin="top" onClick={onSubmit} text={submitText} isDisabled={submitDisabled} />
      )}
    </div>
  );

  const renderDialog = (Component, additionalProps = {}) => (
    <Component
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={dialogRef}
      className={classnames(
        'modal-dialog container',
        `container--${size}`,
        { 'modal-dialog--standalone': standalone },
        className ? className : undefined
      )}
      role="dialog"
      aria-labelledby={`${name}-heading`}
      aria-describedby={`${name}-description`}
      {...rest}
      {...additionalProps}
    >
      {headerElement || defaultHeaderElement}
      <section id={`${name}-description`}>{children}</section>
      {footerElement || defaultFooterElement}
    </Component>
  );

  if (standalone) {
    return renderDialog('div');
  }

  if (!modalNode) return null;

  // portals need to be wrapped in a fragment because react-docgen doesn't recognize them
  // as a component ref: https://github.com/reactjs/react-docgen/issues/336
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div ref={dialogOverlayRef} onClick={onOverlayClick} tabIndex="-1" className="modal-dialog-overlay">
            {renderDialog(FocusTrap, { as: 'div' })}
          </div>
        </>,
        modalNode
      )}
    </>
  );
}

ModalDialog.sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

ModalDialog.defaultProps = {
  closeKind: Button.kinds.cancel,
  size: ModalDialog.sizes.small,
};

ModalDialog.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  submitDisabled: PropTypes.bool,
  submitText: PropTypes.string,
  submitKind: PropTypes.oneOf(Object.values(Button.kinds)),
  onClose: PropTypes.func,
  closeText: PropTypes.string,
  closeKind: PropTypes.oneOf(Object.values(Button.kinds)),
  standalone: PropTypes.bool,
  renderTo: PropTypes.any,
  headerElement: PropTypes.element,
  footerElement: PropTypes.element,
  size: PropTypes.oneOf(Object.keys(ModalDialog.sizes)),
};

export default ModalDialog;
