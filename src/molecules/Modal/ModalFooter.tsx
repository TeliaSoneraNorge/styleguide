import React from 'react';

interface ModalFooterProps {
  children?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  return <div className="telia-modal__footer">{props.children}</div>;
};
