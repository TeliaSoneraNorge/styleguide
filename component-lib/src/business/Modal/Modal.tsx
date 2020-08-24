import React from 'react';
import { createPortal } from 'react-dom';
import { getModalRoot } from './getModalRoot';
import cn from 'classnames';

import { useFocusTrap } from './useFocusTrap';
import { useEscapeListener } from './useEscapeListener';
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
}
export const Modal: React.FC<Props> = props => {
  const { container } = useFocusTrap();
  const closeModal = () => props.setOpen(false);
  useEscapeListener({ onEscape: closeModal });
  const modalPortal = getModalRoot();

  return createPortal(
    <div ref={container} className={cn('Business-Modal', { 'Business-Modal--invisible': !props.open })}>
      <div
        className={cn(
          'Business-Modal-container',
          props.open ? '' : '',
          props.size ? `Business-Modal-container--${props.size}` : 'Business-Modal-container--md'
        )}
      >
        {props.children}
      </div>
    </div>,
    modalPortal
  );
};
