import React from 'react';

export const ModalFooter: React.FC = (props: { children?: React.ReactNode }) => {
  return <div className="telia-modal__footer">{props.children}</div>;
};
