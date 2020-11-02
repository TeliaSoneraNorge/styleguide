import React from 'react';
import { Avatar } from './Avatar';
import images from '../../stories/sampleImages';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { colors } from '../../index';

export default {
  component: Avatar,
  title: 'Component library/Molecules/Avatar',
  decorations: [withDesign],
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
      <br />

      <h2 style={{ marginBottom: 0 }}>
        <code>size='big'</code>
      </h2>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <h3>Default</h3>
          <Avatar text="HG" size="big" />
          <Avatar icon="abroad" size="big" />
          <Avatar img={images.hero1} size="big" alt="user" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Button</h3>
          <Avatar text="HG" onClick={action('Button avatar with text')} size="big" />
          <Avatar icon="abroad" onClick={action('Button avatar with icon')} size="big" />
          <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" size="big" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Anchor</h3>
          <Avatar text="HG" href="my/path" onClick={action('Anchor avatar with text')} size="big" />
          <Avatar icon="abroad" href="my/path" onClick={action('Anchor avatar with icon')} size="big" />
          <Avatar
            img={images.hero1}
            href="my/path"
            onClick={action('Anchor avatar with image')}
            alt="user"
            size="big"
          />
        </div>
      </div>
      <h2 style={{ marginBottom: 0 }}>With status</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <h3>Online</h3>
          <Avatar text="HG" status="online" />
          <Avatar icon="abroad" status="online" />
          <Avatar img={images.hero1} alt="user" status="online" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Offline</h3>
          <Avatar text="HG" onClick={action('Button avatar with text')} status="offline" />
          <Avatar icon="abroad" onClick={action('Button avatar with icon')} status="offline" />
          <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" status="offline" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Inactive</h3>
          <Avatar text="HG" href="my/path" onClick={action('Anchor avatar with text')} status="inactive" />
          <Avatar icon="abroad" href="my/path" onClick={action('Anchor avatar with icon')} status="inactive" />
          <Avatar
            img={images.hero1}
            href="my/path"
            onClick={action('Anchor avatar with image')}
            alt="user"
            status="inactive"
          />
        </div>
      </div>
      <br />

      <h2 style={{ marginBottom: 0 }}>Couple</h2>
      <div>An avatar can contain another avatar, shown as a couple</div>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <h3>Online</h3>
          <Avatar text="HG" avatar={<Avatar text="HG" />} />
          <Avatar icon="abroad" size="compact" avatar={<Avatar img={images.hero1} alt="user" />} />
          <Avatar img={images.hero1} alt="user" size="big" avatar={<Avatar icon="phone" />} />
        </div>
      </div>
    </div>
  );
};

export const Colors = () => {
  return (
    <>
      <p>
        <h3>The avatar supports all Telia colors.</h3>
        <br />
        Providing a color, the color of the Avatar will be set to the color from props, and the background will be set
        to the color from props with a transparency
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(colors).map(key => (
          <Avatar icon="folder" color={key as keyof typeof colors} />
        ))}
      </div>
      <br />
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(colors).map(key => (
          <Avatar text="HG" color={key as keyof typeof colors} />
        ))}
      </div>
    </>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/GWW1v1iOiprfTaQ8uapU6e/Avatars?node-id=13%3A21',
  },
};
