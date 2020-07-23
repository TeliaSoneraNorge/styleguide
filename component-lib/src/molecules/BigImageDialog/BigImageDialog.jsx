import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Context } from '../ModalDialog/ModalDialogProvider';
import FocusTrap from '../../atoms/FocusTrap/FocusTrap';
import { Icon } from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';

const KEY_ESC = 27;

const BigImageDialog = ({ name, heading, description, src, children, onClose, standalone, renderTo, ...rest }) => {
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
    if (!dialogRef.current || standalone) return;

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

  const onOverlayClick = event => {
    if (event.target !== dialogOverlayRef.current) return;
    if (onClose) onClose();
  };

  const handleKeyDown = event => {
    if (event.keyCode === KEY_ESC && onClose) onClose();
  };

  useEffect(returnFocusOnDialogClose, []);
  useEffect(setFocusOnDialog, [dialogRef.current]);
  useEffect(disableAndResetPageScroll, []);

  const renderDialog = (Component, additionalProps = {}) => (
    <Component
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={dialogRef}
      className={classnames('big-image-dialog container', 'container--medium', 'container--no-padding', {
        'big-image-dialog--standalone': standalone,
      })}
      role="dialog"
      aria-labelledby={`${name}-heading`}
      aria-describedby={`${name}-description`}
      {...rest}
      {...additionalProps}
    >
      <section className="big-image-dialog__container">
        <button className="big-image-dialog__close-container" onClick={onClose}>
          <span className="big-image-dialog__close-text">LUKK</span>
          <Icon className="big-image-dialog__close-icon" icon="close" color="black" />
        </button>
        <div className="big-image-dialog__image-container">
          <img alt="" src={src} />
        </div>
        <div className="big-image-dialog__content">
          <h2 id={`${name}-heading`} className="big-image-dialog__heading">
            {heading}
          </h2>
          <Paragraph id={`${name}-content`}>{description}</Paragraph>
          {children}
        </div>
      </section>
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
          <div ref={dialogOverlayRef} onClick={onOverlayClick} tabIndex="-1" className="big-image-dialog__overlay">
            {renderDialog(FocusTrap, { as: 'div' })}
          </div>
        </>,
        modalNode
      )}
    </>
  );
};

BigImageDialog.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  standalone: PropTypes.bool,
  renderTo: PropTypes.any,
};

export default BigImageDialog;
