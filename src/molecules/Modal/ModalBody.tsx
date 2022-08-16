import React from 'react';
import cn from 'classnames';
interface Props {
  noPadding?: boolean;
  children?: React.ReactNode;
}
export const ModalBody: React.FC<Props> = (props) => {
  return (
    <div className={cn('telia-modal__body', { 'telia-modal__body--noPadding': props.noPadding })}>{props.children}</div>
  );
};

export const InfoModalBody: React.FC<Props> = (props) => {
  return (
    <div className={cn('telia-info-modal__body', { 'telia-info-modal__body--noPadding': props.noPadding })}>
      {props.children}
    </div>
  );
};
