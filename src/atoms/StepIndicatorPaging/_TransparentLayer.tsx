import React from 'react';

export const TransportLayer = (props: any) => {
  const { modifier } = props;
  return (
    <div
      className={
        'telia-step-indicator-paging__transparent-layer telia-step-indicator-paging__transparent-layer--' + modifier
      }
    ></div>
  );
};
