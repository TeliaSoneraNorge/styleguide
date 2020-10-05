import React from 'react';
import cn from 'classnames';
interface Props {
  noPadding?: boolean;
}
export const ModalBody: React.FC<Props> = props => {
  return (
    <div className={cn('telia-modal-body', { 'telia-modal-body--noPadding': props.noPadding })}>{props.children}</div>
  );
};
