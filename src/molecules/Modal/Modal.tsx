import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { getModalRoot } from './getModalRoot';
import cn from 'classnames';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from './useEscapeListener';
import { useClickOutsideListener } from './useClickOutsideListener';

interface Props {
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
    }
    document.querySelector('html')?.classList.toggle('scroll-lock');

    return () => (returnFocusTo as HTMLElement)?.focus();
  }, [props.open]);

  return createPortal(
    <div
      ref={container}
      className={cn('telia-modal', { 'telia-modal--invisible': !props.open }, props.className)}
      tabIndex={-1}
    >
      <div
        className={cn('telia-modal__container', `telia-modal__container--${size}`, props.open ? '' : '')}
        tabIndex={-1}
      >
        {props.children}
      </div>
    </div>,
    modalPortal
  );
};
