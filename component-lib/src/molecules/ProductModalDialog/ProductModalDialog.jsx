import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Context } from '../ModalDialog/ModalDialogProvider';
import FocusTrap from '../../atoms/FocusTrap/FocusTrap';
import Button from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';
import ColorPicker from '../../atoms/ColorPicker';

const KEY_ESC = 27;

const ProductModalDialog = ({
  name,
  heading,
  description,
  variants,
  selected,
  onSelect,
  onSubmit,
  submitText,
  onClose,
  standalone,
  renderTo,
  ...rest
}) => {
  const modalNode = renderTo || useContext(Context);
  const dialogRef = useRef();
  const dialogOverlayRef = useRef();
  const selectedVariant = variants.find(variant => variant.id === selected.id) || variants[0];

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
      className={classnames('product-modal-dialog container', 'container--medium', 'container--no-padding', {
        'product-modal-dialog--standalone': standalone,
      })}
      role="dialog"
      aria-labelledby={`${name}-heading`}
      aria-describedby={`${name}-description`}
      {...rest}
      {...additionalProps}
    >
      <section className="product-modal-dialog__container">
        <button className="product-modal-dialog__close-container" onClick={onClose}>
          <span className="product-modal-dialog__close-text">LUKK</span>
          <Icon className="product-modal-dialog__close-icon" icon="close" color="black" />
        </button>
        <div className="product-modal-dialog__image-container">
          <img alt="" src={selectedVariant.src} />
        </div>
        <div className="product-modal-dialog__content">
          <h2 id={`${name}-heading`} className="product-modal-dialog__heading">
            {heading}
          </h2>
          <Paragraph id={`${name}-content`}>{description}</Paragraph>
          <div className="product-modal-dialog__color-picker">
            <ColorPicker colors={variants} selected={selectedVariant} onSelect={onSelect} />
          </div>
          <div className="product-modal-dialog__footer">
            <span className="product-modal-dialog__price">{formatPrice(selectedVariant.price)}</span>
            <Button
              kind="primary"
              icon="shoppingcart"
              margin="top"
              onClick={() => onSubmit(selectedVariant)}
              text={submitText}
            />
          </div>
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
          <div ref={dialogOverlayRef} onClick={onOverlayClick} tabIndex="-1" className="product-modal-dialog__overlay">
            {renderDialog(FocusTrap, { as: 'div' })}
          </div>
        </>,
        modalNode
      )}
    </>
  );
};

const formatPrice = price => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

ProductModalDialog.propTypes = {
  name: PropTypes.string.isRequired,
  heading: PropTypes.string,
  description: PropTypes.string,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
      src: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  selected: PropTypes.object,
  onSelect: PropTypes.func,
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  onClose: PropTypes.func,
  standalone: PropTypes.bool,
  renderTo: PropTypes.any,
};

export default ProductModalDialog;
