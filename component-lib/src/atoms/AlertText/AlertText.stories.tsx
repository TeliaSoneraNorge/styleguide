import React from 'react';
import AlertText from './AlertText';

export default {
  title: 'Component library|Atoms/Alert Text',
  component: AlertText,
};

export const Default = () => {
  console.log('AlertText', AlertText);

  return <AlertText>Chat is closed</AlertText>;
};
