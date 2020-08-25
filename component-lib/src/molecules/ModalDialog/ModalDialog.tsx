import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Context } from './ModalDialogProvider';
import FocusTrap from '../../atoms/FocusTrap/FocusTrap';
import Button from '../../atoms/Button/Button';

const KEY_ESC = 27;

type OwnProps = {
    name: string;
    heading?: string;
    children?: React.ReactNode;
    onSubmit?: (...args: any[]) => any;
    submitDisabled?: boolean;
    submitText?: string;
    submitKind?: any; // TODO: PropTypes.oneOf(Object.values(Button.kinds))
    onClose?: (...args: any[]) => any;
    closeText?: string;
    closeKind?: any; // TODO: PropTypes.oneOf(Object.values(Button.kinds))
    standalone?: boolean;
    renderTo?: any;
    headerElement?: React.ReactElement;
    footerElement?: React.ReactElement;
    size?: any; // TODO: PropTypes.oneOf(Object.keys(ModalDialog.sizes))
};

type Props = OwnProps & typeof ModalDialog.defaultProps;

/**
 * Status: *in progress*.
 * Category: Notifications
 *
 * Look at the <a href='#/modal-dialog'>Modal Dialog sample page</a> to see this component in action.
 *
 * TODO:
 ** &lt;div role="dialog"&gt; can be changed to &lt;dialog&gt; when this element is more widely supported
 */
export default function ModalDialog({ name, heading, children, onSubmit, submitDisabled, submitText, submitKind, onClose, closeText, closeKind, standalone, renderTo, headerElement, footerElement, size, ...rest }: Props) {
  const modalNode = renderTo || useContext(Context);
  const dialogRef = useRef();
  const dialogOverlayRef = useRef();

  const returnFocusOnDialogClose = () => {
    if (standalone) return;

    const lastFocusedElement = document.activeElement;

    return () => {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'focus' does not exist on type 'Element'.
      if (lastFocusedElement) lastFocusedElement.focus();
    };
  };

  const setFocusOnDialog = () => {
    if (!dialogRef.current || standalone) return;

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    dialogRef.current.focus();
  };

  const disableAndResetPageScroll = () => {
    if (standalone) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (dialogOverlayRef.current) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      dialogOverlayRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  };

  const onOverlayClick = (event: any) => {
    if (event.target !== dialogOverlayRef.current) return;
    if (onClose) onClose();
  };

  const handleKeyDown = (event: any) => {
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
    <>
      {submitText && onSubmit && (
        <Button kind={submitKind} margin="top" onClick={onSubmit} text={submitText} isDisabled={submitDisabled} />
      )}
      {closeText && onClose && <Button kind={closeKind} margin="top" onClick={onClose} text={closeText} />}
    </>
  );

  const renderDialog = (Component: any, additionalProps = {}) => (
    <Component
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={dialogRef}
      className={classnames('modal-dialog container', `container--${size}`, { 'modal-dialog--standalone': standalone })}
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
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLDi... Remove this comment to see the full error message */}
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
