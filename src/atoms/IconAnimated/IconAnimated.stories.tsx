import React from 'react';
import IconAnimated from './IconAnimated';

export default {
  title: 'Component library/Atoms/Icon Animated',
  component: IconAnimated,
};

export const Default = () => (

  <IconAnimated
    style={{
      height: 10,
      width: 10,
    }}
    json={require('./music_freedom.json')}
  />

);

declare function require(jsonString:string): any;