import React from 'react';

type ModalFooterProps = {
  children?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = (props:ModalFooterProps) => {
  return <div className="telia-modal__footer">{props.children}</div>;
};
