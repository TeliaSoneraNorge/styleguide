import React from 'react';
import { PhoneNumberField } from './index';
import { Button } from '../../business/Button';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { LandCode } from './PhoneNumberField';

export default {
  component: PhoneNumberField,
  title: 'Component library/Molecules/Phone Number Field',
  decorators: [withDesign],
};

const landcodes: LandCode[] = [
  { label: '+47 Norge', value: '+47' },
  { label: '+46 Sverige', value: '+46' },
  { label: '+358 Finland', value: '+358' },
];

export const Default = () => {
  const [number, setNumber] = React.useState('');
  console.log(number);

  return (
    <>
      <h3>PhoneNumberField</h3>
      <a href="https://www.figma.com/file/rYnkFzvOksz738YsHGyRqa/Phone-Number-Field?node-id=2%3A2">Figma skisser</a>
      <p></p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <PhoneNumberField landcodes={landcodes} onChange={setNumber} />
          <br />
          <br />
          <h4>With label</h4>
          <PhoneNumberField landcodes={landcodes} onChange={setNumber} label="Phone number" />
          <br />
          <br />
          <h4>With helptext</h4>
          <PhoneNumberField landcodes={landcodes} onChange={setNumber} maxlength={8} helpText="Help or instructions" />
          <br />
          <br />
          <h4>
            With <code>{'error={true}'} and helptext</code>
          </h4>
          <PhoneNumberField landcodes={landcodes} onChange={setNumber} error={true} helpText="Error message" />
          <br />
          <br />
          With <code>{'disabled={true}'}</code>
          <PhoneNumberField landcodes={landcodes} onChange={setNumber} disabled />
        </div>
      </div>
    </>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rYnkFzvOksz738YsHGyRqa/Phone-Number-Field?node-id=2%3A2',
  },
};
