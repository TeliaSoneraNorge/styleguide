import React, { useState } from 'react';
import { Button } from '../Button';
import { PageLayout } from './PageLayout';
import { PageHeader } from './PageHeader';
import { PageBody } from './PageBody';
import { PageFooter } from './PageFooter';
import { PageSideSection } from './PageSideSection';

export default {
  component: PageLayout,
  title: 'Business/PageLayout',
  subComponents: { PageLayout },
};

export const Default = () => {
  return (
    <div style={{ height: '90vh' }}>
      <PageLayout
        header={<h2>Hello world</h2>}
        body={
          <div>
            lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quaerat nisi maiores perspiciatis asperiores,
            corporis magnam distinctio, blanditiis, suscipit animi fuga obcaecati nostrum doloribus libero praesentium
            voluptates eligendi eaque expedita.
          </div>
        }
        footer={
          <div>
            <Button label="klick" />
          </div>
        }
      />
    </div>
  );
};

export const SideContent = () => {
  return (
    <div style={{ height: '90vh' }}>
      <PageLayout
        header={<h2>Hello world</h2>}
        body={
          <div>
            lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quaerat nisi maiores perspiciatis asperiores,
            corporis magnam distinctio, blanditiis, suscipit animi fuga obcaecati nostrum doloribus libero praesentium
            voluptates eligendi eaque expedita.
          </div>
        }
        left={<div style={{ border: '1px solid grey', borderRadius: '8px', padding: '1rem' }}>Left content</div>}
        right={<div style={{ border: '1px solid grey', borderRadius: '8px', padding: '1rem' }}>Right</div>}
        footer={
          <div>
            <Button label="klick" />
          </div>
        }
      />
    </div>
  );
};
