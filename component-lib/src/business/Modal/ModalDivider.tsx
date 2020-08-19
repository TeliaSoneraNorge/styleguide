import React from 'react';
import cn from 'classnames';

interface Props {
  fullWidth?: boolean;
}
export const ModalDivider = (props: Props) => {
  return <div className={cn('Business-Modal-divider', { 'Business-Modal-divider--fullWidth': props.fullWidth })} />;
};
