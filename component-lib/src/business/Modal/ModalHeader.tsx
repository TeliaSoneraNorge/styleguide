import React from 'react';
import cn from 'classnames';

interface Props {
  border?: boolean;
}
export const ModalHeader: React.FC<Props> = props => {
  return (
    <div className={cn('Business-Modal-header', { 'Business-Modal-header--border': props.border })}>
      {props.children}{' '}
    </div>
  );
};
