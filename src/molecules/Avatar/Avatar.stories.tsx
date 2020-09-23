import React from 'react';
import { Avatar } from './Avatar';
import images from '../../stories/sampleImages';

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
        <Avatar text="HG" onClick={() => console.log('')} />
        <Avatar icon="abroad" onClick={() => console.log('')} />
        <Avatar img={images.hero1} onClick={() => console.log('helo')} alt="user" />
      </div>

      <div style={{ paddingRight: '1rem' }}>
        <h3>Ancor</h3>
        <Avatar text="HG" href="my/path" onClick={() => console.log('go to my/path')} />
        <Avatar icon="abroad" href="my/path" onClick={() => console.log('go to my/path')} />
        <Avatar img={images.hero1} href="my/path" onClick={() => console.log('go to my/path')} alt="user" />
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
        <Avatar text="HG" onClick={() => console.log('')} compact={true} />
        <Avatar icon="abroad" onClick={() => console.log('')} compact={true} />
        <Avatar img={images.hero1} onClick={() => console.log('helo')} compact={true} alt="user" />
      </div>

      <div style={{ paddingRight: '1rem' }}>
        <h3>Ancor</h3>
        <Avatar text="HG" href="my/path" onClick={() => console.log('go to my/path')} compact={true} />
        <Avatar icon="abroad" href="my/path" onClick={() => console.log('go to my/path')} compact={true} />
        <Avatar
          img={images.hero1}
          href="my/path"
          onClick={() => console.log('go to my/path')}
          compact={true}
          alt="user"
        />
      </div>
    </div>
  );
};
