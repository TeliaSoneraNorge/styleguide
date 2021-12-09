import React from 'react';
import { Lozenge } from './index';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Lozenge,
  title: 'Component library/Molecules/Lozenge',
  decorators: [withDesign],
};

export const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '4rem' }}>
        <h3>Round Lozenge</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '30%', marginRight: '1rem' }}>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="positive" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="negative" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="warning" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="communication" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="info" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <h3>Square Lozenge</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '30%', marginRight: '1rem' }}>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="positive" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="negative" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="warning" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="communication" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge label="Lozenge" status="info" type="square" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Round Lozenge</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '30%', marginRight: '1rem' }}>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="positive" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="negative" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="warning" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="communication" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="info" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <h3>Square Lozenge</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '30%', marginRight: '1rem' }}>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="positive" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="negative" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="warning" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="communication" type="square" />
            </div>
            <div style={{ paddingBottom: '10px' }}>
              <Lozenge icon="attach" label="Lozenge" status="info" type="square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HF5bLPBAkWg3rmfcNr2K18/Lozenges?node-id=13%3A21',
  },
};
