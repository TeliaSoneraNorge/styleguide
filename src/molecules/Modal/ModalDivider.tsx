import React from 'react';
import cn from 'classnames';

interface Props {
  fullWidth?: boolean;
}
export const ModalDivider = (props: Props) => {
  return <div className={cn('telia-modal-divider', { 'telia-modal-divider__fullWidth': props.fullWidth })} />;
};
