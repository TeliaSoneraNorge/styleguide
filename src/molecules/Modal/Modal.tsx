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
}
export const Modal: React.FC<Props> = (props) => {
  const { container } = useFocusTrap();
  const closeModal = () => props.setOpen(false);
  useEscapeListener({ onEscape: closeModal });
  useClickOutsideListener({ open: props.open, setOpen: props.setOpen, containerRef: container });
  const modalPortal = getModalRoot();
  const size = props.size || 'medium';

  useEffect(() => {
    if (props.open) {
      container.current?.focus();
    }
    document.querySelector('html')?.classList.toggle('scroll-lock');
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
