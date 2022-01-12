import React, { useState } from 'react';
import { Button } from '../Button';
import { PageLayout } from './PageLayout';

export default {
  component: PageLayout,
  title: 'Business/PageLayout',
  subComponents: { PageLayout },
  parameters: { layout: 'fullscreen' },
};

export const Default = () => {
  return (
    <div>
      <PageLayout
        header={{ component: <h2>Hello world</h2> }}
        body={{
          component: (
            <div>
              lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quaerat nisi maiores perspiciatis
              asperiores, corporis magnam distinctio, blanditiis, suscipit animi fuga obcaecati nostrum doloribus libero
              praesentium voluptates eligendi eaque expedita.
            </div>
          ),
        }}
        footer={{
          component: (
            <div>
              <Button label="klick" />
            </div>
          ),
        }}
      />
    </div>
  );
};

export const SideContent = () => {
  return (
    <div>
      <PageLayout
        navBar={{
          component: (
            <div>
              <Button label="Back" icon="arrow-left" kind="primary-text" />
            </div>
          ),
        }}
        header={{
          component: (
            <div>
              <h2>Hello world</h2>
            </div>
          ),
        }}
        body={{
          component: (
            <div>
              lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quaerat nisi maiores perspiciatis
              asperiores, corporis magnam distinctio, blanditiis, suscipit animi fuga obcaecati nostrum doloribus libero
              praesentium voluptates eligendi eaque expedita.
            </div>
          ),
        }}
        left={{
          component: <div style={{ border: '1px solid grey', borderRadius: '8px', padding: '1rem' }}>Left content</div>,
        }}
        right={{
          component: <div style={{ border: '1px solid grey', borderRadius: '8px', padding: '1rem' }}>Right</div>,
        }}
        footer={{
          component: (
            <div>
              <Button label="klick" />
            </div>
          ),
        }}
      />
    </div>
  );
};

export const StickyFooter = () => {
  return (
    <div>
      <PageLayout
        navBar={{
          component: (
            <div>
              <Button label="Back" icon="arrow-left" kind="primary-text" />
            </div>
          ),
        }}
        header={{
          component: (
            <div>
              <h2>Hello world</h2>
            </div>
          ),
        }}
        body={{
          component: (
            <div>
              lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quaerat nisi maiores perspiciatis
              asperiores, corporis magnam distinctio, blanditiis, suscipit animi fuga obcaecati nostrum doloribus libero
              praesentium voluptates eligendi eaque expedita.
            </div>
          ),
        }}
        left={{
          component: <div style={{ border: '1px solid grey', borderRadius: '8px', padding: '1rem' }}>Left content</div>,
        }}
        right={{
          component: <div style={{ border: '1px solid grey', borderRadius: '8px', padding: '1rem' }}>Right</div>,
        }}
        footer={{
          sticky: true,
          component: (
            <div>
              <Button label="klick" />
            </div>
          ),
        }}
      />
    </div>
  );
};
