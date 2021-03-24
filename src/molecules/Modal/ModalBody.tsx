import React from 'react';
import cn from 'classnames';
interface Props {
  noPadding?: boolean;
}
export const ModalBody: React.FC<Props> = (props) => {
  return (
    <div className={cn('telia-modal__body', { 'telia-modal__body--noPadding': props.noPadding })}>{props.children}</div>
  );
};
