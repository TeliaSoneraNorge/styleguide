import React, { useRef, useEffect } from 'react';
import cn from 'classnames';

import { useFocusTrap } from './useFocusTrap';
interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: 'sm' | 'm' | 'lg';
}
export const Modal: React.FC<Props> = props => {
  const { container } = useFocusTrap();

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.keyCode === 27 && props.open) props.setOpen(false);
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [props.open]);

  return (
    <div ref={container} className={cn('Business-Modal', { 'Business-Modal--invisible': !props.open })}>
      <div
        className={cn(
          'Business-Modal-container',
          {
            'Business-Modal-container--small': props.size === 'sm',
            'Business-Modal-container--large': props.size === 'lg',
          },
          props.open ? '' : ''
        )}
      >
        {props.children}
      </div>
    </div>
  );
};
