import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Toggle } from './Toggle';

storiesOf('Business/Toggle', module).add('default', () => {
  const [checked, setChecked] = useState(false);
  return <Toggle checked={checked} onChange={e => setChecked(e.target.checked)} />;
});
