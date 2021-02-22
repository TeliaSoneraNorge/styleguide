import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Toggle } from './Toggle';

export default {
  title: 'Component library/Atoms/Toggle',
  component: Toggle,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={(e) => setChecked(e.target.checked)} label="my-checkbox" />;
};
