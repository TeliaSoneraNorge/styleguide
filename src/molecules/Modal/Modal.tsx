import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getModalRoot } from './getModalRoot';
import cn from 'classnames';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from './useEscapeListener';
import { useClickOutsideListener } from './useClickOutsideListener';
import Button from '../../atoms/Button';

interface Props {
  /**
   * Gives the modal an accessible name by passing the element id that provides the modal title
   */
  ariaLabelledBy: string;
  /**
   * Gives the modal an accessible description by passing the element id that provides a longer text description
   */
  ariaDescribedBy?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  className?: string;
  /**
   * If you want to return focus to a specific html element on closing the modal. Default is the modal trigger element.
   */
  returnFocusTo?: HTMLElement | null;
}
export const Modal: React.FC<Props> = (props) => {
  const { container } = useFocusTrap();
  const closeModal = () => props.setOpen(false);
  useEscapeListener({ onEscape: closeModal });
  useClickOutsideListener({ open: props.open, setOpen: props.setOpen, containerRef: container });
  const modalPortal = getModalRoot();
  const size = props.size || 'medium';

  useEffect(() => {
    let returnFocusTo: Element | null;
    if (props.open) {
      returnFocusTo = props.returnFocusTo ?? document.activeElement;
      container.current?.focus();
      document.querySelector('html')?.classList.add('scroll-lock');
    } else {
      document.querySelector('html')?.classList.remove('scroll-lock');
    }
    return () => (returnFocusTo as HTMLElement)?.focus();
  }, [props.open]);

  useEffect(() => {
    return () => {
      document.querySelector('html')?.classList.remove('scroll-lock');
    };
  }, []);

  return createPortal(
    <div
      ref={container}
      className={cn('telia-modal', { 'telia-modal--invisible': !props.open }, props.className)}
      tabIndex={-1}
      aria-hidden={props.open ? 'true' : 'false'}
    >
      <div
        className={cn('telia-modal__container', `telia-modal__container--${size}`, props.open ? '' : '')}
        tabIndex={-1}
        role="dialog"
        aria-modal={true}
        aria-labelledby={props.ariaLabelledBy}
        aria-describedby={props.ariaDescribedBy ?? undefined}
      >
        {props.children}
      </div>
    </div>,
    modalPortal
  );
};

export const InfoModal: React.FC<Props> = (props) => {
  const { container } = useFocusTrap();
  const closeModal = () => props.setOpen(false);
  useEscapeListener({ onEscape: closeModal });
  useClickOutsideListener({ open: props.open, setOpen: props.setOpen, containerRef: container });
  const modalPortal = getModalRoot();
  const size = props.size || 'medium';

  useEffect(() => {
    let returnFocusTo: Element | null;
    if (props.open) {
      returnFocusTo = props.returnFocusTo ?? document.activeElement;
      container.current?.focus();
      document.querySelector('html')?.classList.add('scroll-lock');
    } else {
      document.querySelector('html')?.classList.remove('scroll-lock');
    }
    return () => (returnFocusTo as HTMLElement)?.focus();
  }, [props.open]);

  useEffect(() => {
    return () => {
      document.querySelector('html')?.classList.remove('scroll-lock');
    };
  }, []);

  return createPortal(
    <div
      ref={container}
      className={cn('telia-info-modal', { 'telia-info-modal--invisible': !props.open }, props.className)}
      tabIndex={-1}
      aria-hidden={props.open ? 'true' : 'false'}
    >
      <div
        className={cn('telia-info-modal__container', `telia-info-modal__container--${size}`, props.open ? '' : '')}
        tabIndex={-1}
        role="dialog"
        aria-modal={true}
        aria-labelledby={props.ariaLabelledBy}
        aria-describedby={props.ariaDescribedBy ?? undefined}
      >
        <div className="telia-info-modal__close-button" onClick={() => props.setOpen(!open)}>
          <Button iconPlacement="right" icon="close-circle" kind="link" text="Lukk" />
        </div>
        {props.children}
      </div>
    </div>,
    modalPortal
  );
};
