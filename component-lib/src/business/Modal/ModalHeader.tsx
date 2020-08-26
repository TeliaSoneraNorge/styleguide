import React from 'react';
import cn from 'classnames';

interface Props {
  border?: boolean;
}
export const ModalHeader: React.FC<Props> = props => {
  return (
    <div className={cn('business-modal-header', { 'business-modal-header__border': props.border })}>
      {props.children}
    </div>
  );
};
