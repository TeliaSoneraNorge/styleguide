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
  );
};
export const Compact = ({}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ paddingRight: '1rem' }}>
        <h3>Default</h3>
        <Avatar text="HG" compact={true} />
        <Avatar icon="abroad" compact={true} />
        <Avatar img={images.hero1} compact={true} alt="user" />
      </div>

      <div style={{ paddingRight: '1rem' }}>
        <h3>Button</h3>
        <Avatar text="HG" onClick={action('Button avatar with text')} compact={true} />
        <Avatar icon="abroad" onClick={action('Button avatar with icon')} compact={true} />
        <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" compact={true} />
      </div>

      <div style={{ paddingRight: '1rem' }}>
        <h3>Anchor</h3>
        <Avatar text="HG" href="my/path" onClick={action('Anchor avatar with text')} compact={true} />
        <Avatar icon="abroad" href="my/path" onClick={action('Anchor avatar with icon')} compact={true} />
        <Avatar
          img={images.hero1}
          href="my/path"
          onClick={action('Anchor avatar with image')}
          alt="user"
          compact={true}
        />
      </div>
    </div>
  );
};
