import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

import { text, boolean } from '@storybook/addon-knobs';

export default {
  component: Checkbox,
  title: 'Component library/Atoms/Checkbox',
};

export const Default = ({}) => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <div>
      <h3>With state</h3>

      <Checkbox
        className="my-class"
        name="my-checkbox"
        label="Checkbox"
        checked={checked}
        onChange={(e) => setChecked(e?.target.checked ?? false)}
        controls="aria-controls"
      />

      <br />
      <br />
      <div>(Hidden label)</div>
      <Checkbox
        checked={checked2}
        label={'Hidden label'}
        onChange={(e) => setChecked2(e?.target.checked ?? false)}
        hiddenLabel={true}
      />

      <br />
      <h3>Variants</h3>

      <Checkbox checked={false} partial={true} label={'Partial'} onChange={() => undefined} />
      <br />
      <Checkbox checked={true} label={'Checked'} onChange={() => undefined} />
      <br />
      <Checkbox checked={false} disabled={true} label={'Disabled'} onChange={() => undefined} />
      <br />
      <Checkbox checked={false} partial={true} disabled={true} label={'Disabled partial'} onChange={() => undefined} />
      <br />
      <Checkbox checked={true} disabled={true} label={'Disabled checked'} onChange={() => undefined} />
      <br />
    </div>
  );
};
