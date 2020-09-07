import React from 'react';
import { createPortal } from 'react-dom';
import { getModalRoot } from './getModalRoot';
import cn from 'classnames';

import { useFocusTrap } from './useFocusTrap';
import { useEscapeListener } from './useEscapeListener';
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: 'small' | 'medium' | 'large';
}
export const Modal: React.FC<Props> = props => {
  const { container } = useFocusTrap();
  const closeModal = () => props.setOpen(false);
  useEscapeListener({ onEscape: closeModal });
  const modalPortal = getModalRoot();
  const size = props.size || 'medium';

  return createPortal(
    <div ref={container} className={cn('telia-modal', { 'telia-modal__invisible': !props.open })}>
      <div className={cn('telia-modal-container', `telia-modal-container__${size}`, props.open ? '' : '')}>
        {props.children}
      </div>
    </div>,
    modalPortal
  );
};
