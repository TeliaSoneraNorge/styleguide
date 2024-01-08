import React, { useState } from 'react';

import { Toggle } from './Toggle';

export default {
  title: 'Business/Toggle',
  component: Toggle,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};
