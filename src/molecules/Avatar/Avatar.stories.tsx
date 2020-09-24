import React from 'react';
import { Avatar } from './Avatar';
import images from '../../stories/sampleImages';
import { action } from '@storybook/addon-actions';

export default {
  component: Avatar,
  title: 'Component library/Molecules/Avatar',
};

export const Default = ({}) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <h3>Default</h3>
          <Avatar text="HG" />
          <Avatar icon="abroad" />
          <Avatar img={images.hero1} alt="user" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Button</h3>
          <Avatar text="HG" onClick={action('Button avatar with text')} />
          <Avatar icon="abroad" onClick={action('Button avatar with icon')} />
          <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Anchor</h3>
          <Avatar text="HG" href="my/path" onClick={action('Anchor avatar with text')} />
          <Avatar icon="abroad" href="my/path" onClick={action('Anchor avatar with icon')} />
          <Avatar img={images.hero1} href="my/path" onClick={action('Anchor avatar with image')} alt="user" />
        </div>
      </div>
      <br />
      <h2 style={{ marginBottom: 0 }}>
        <code>size='compact'</code>
      </h2>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <h3>Default</h3>
          <Avatar text="HG" size="compact" />
          <Avatar icon="abroad" size="compact" />
          <Avatar img={images.hero1} size="compact" alt="user" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Button</h3>
          <Avatar text="HG" onClick={action('Button avatar with text')} size="compact" />
          <Avatar icon="abroad" onClick={action('Button avatar with icon')} size="compact" />
          <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" size="compact" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Anchor</h3>
          <Avatar text="HG" href="my/path" onClick={action('Anchor avatar with text')} size="compact" />
          <Avatar icon="abroad" href="my/path" onClick={action('Anchor avatar with icon')} size="compact" />
          <Avatar
            img={images.hero1}
            href="my/path"
            onClick={action('Anchor avatar with image')}
            alt="user"
            size="compact"
          />
        </div>
      </div>
    </div>
  );
};
