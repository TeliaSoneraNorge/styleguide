import React from 'react';
import cn from 'classnames';

interface Props {
  fullWidth?: boolean;
}
export const ModalDivider = (props: Props) => {
  return <div className={cn('telia-modal__divider', { 'telia-modal__divider--fullWidth': props.fullWidth })} />;
};
