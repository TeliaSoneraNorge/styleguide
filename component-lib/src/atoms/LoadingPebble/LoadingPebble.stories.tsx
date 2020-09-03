import React from 'react';
import LoadingPebble from './LoadingPebble';

export default {
  title: 'Component library/Atoms/LoadingPebble',
  component: LoadingPebble,
};

export const Default = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '50vh'}}>
      <LoadingPebble />
    </div>
  )
};
