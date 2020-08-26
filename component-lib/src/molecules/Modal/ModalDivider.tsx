import React from 'react';
import cn from 'classnames';

interface Props {
  fullWidth?: boolean;
}
export const ModalDivider = (props: Props) => {
  return <div className={cn('business-modal-divider', { 'business-modal-divider__fullWidth': props.fullWidth })} />;
};
