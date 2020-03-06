import React, { useState } from 'react';
import { References } from '../../index';

export default {
  title: 'Component library|Molecules/References',
  component: References,
};

export const Default = () => (
  <References
    heading="Vi er stolte levrandører til:"
    items={[
      { alt: 'placeholder1', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder2', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder3', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder4', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder5', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder6', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder7', image: 'http://via.placeholder.com/160x100' },
      { alt: 'placeholder8', image: 'http://via.placeholder.com/160x100' },
    ]}
  />
);