import React from 'react';
import { Avatar } from './Avatar';
import { AvatarCluster } from './AvatarCluster';
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
          <Avatar img={images.hero1} alt="user" icon="user" color="lightGrey" />
          <Avatar img={images.hero1} alt="user" text="HG" color="lightGrey" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Button</h3>
          <Avatar text="HG" onClick={action('Button avatar with text')} />
          <Avatar icon="abroad" onClick={action('Button avatar with icon')} />
          <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" />
          <Avatar
            img={images.hero1}
            alt="user"
            icon="user"
            color="lightGrey"
            onClick={action('Button avatar with image and icon')}
          />
          <Avatar
            img={images.hero1}
            alt="user"
            text="HG"
            color="lightGrey"
            onClick={action('Button avatar with image and text')}
          />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Anchor</h3>
          <Avatar text="HG" href="my/path" onClick={action('Anchor avatar with text')} />
          <Avatar icon="abroad" href="my/path" onClick={action('Anchor avatar with icon')} />
          <Avatar img={images.hero1} href="my/path" onClick={action('Anchor avatar with image')} alt="user" />
          <Avatar
            img={images.hero1}
            alt="user"
            icon="user"
            color="lightGrey"
            href="my/path"
            onClick={action('Button avatar with image and icon')}
          />
          <Avatar
            img={images.hero1}
            alt="user"
            text="HG"
            color="lightGrey"
            href="my/path"
            onClick={action('Button avatar with image and text')}
          />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '1rem' }}>
          <h3>The avatar only shows the first two letters of the text prop</h3>
          <Avatar text="HELLO" href="my/path" onClick={action('Anchor avatar with text')} />
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
          <Avatar img={images.hero1} alt="user" icon="user" color="lightGrey" size="big" />
          <Avatar img={images.hero1} alt="user" text="HG" color="lightGrey" size="big" />
        </div>

        <div style={{ paddingRight: '1rem' }}>
          <h3>Button</h3>
          <Avatar text="HG" onClick={action('Button avatar with text')} size="big" />
          <Avatar icon="abroad" onClick={action('Button avatar with icon')} size="big" />
          <Avatar img={images.hero1} onClick={action('Button avatar with image')} alt="user" size="big" />
          <Avatar
            size="big"
            img={images.hero1}
            alt="user"
            icon="user"
            color="lightGrey"
            onClick={action('Button avatar with image and icon')}
          />
          <Avatar
            size="big"
            img={images.hero1}
            alt="user"
            text="HG"
            color="lightGrey"
            onClick={action('Button avatar with image and text')}
          />
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
          <Avatar
            size="big"
            img={images.hero1}
            alt="user"
            icon="user"
            color="lightGrey"
            href="my/path"
            onClick={action('Button avatar with image and icon')}
          />
          <Avatar
            size="big"
            img={images.hero1}
            alt="user"
            text="HG"
            color="lightGrey"
            href="my/path"
            onClick={action('Button avatar with image and text')}
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
      <div>
        <h3>The avatar supports all Telia colors.</h3>
        <br />
        Providing a color, the color of the Avatar will be set to the color from props, and the background will be set
        to the color from props with a transparency
        <br />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Avatar icon="folder" color="transparent" />
        {Object.keys(colors).map((key, i) => (
          <Avatar key={i} icon="folder" color={key as keyof typeof colors} />
        ))}
      </div>
      <br />
      <br />
      <Avatar icon="folder" color="transparent" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(colors).map((key, i) => (
          <Avatar key={i} text="HG" color={key as keyof typeof colors} />
        ))}
      </div>
    </>
  );
};

export const Cluster = () => {
  return (
    <>
      <h2>Avatar cluster</h2>
      <strong>Default cluster - left stacked</strong>
      <br />
      Default avatar size:
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
        <AvatarCluster>
          <Avatar icon="folder" />
          <Avatar text="HG" />
          <Avatar img={images.hero1} alt="user" />
        </AvatarCluster>
      </div>
      <br />
      Big avatar size:
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
        <AvatarCluster>
          <Avatar icon="folder" size="big" />
          <Avatar text="HG" size="big" />
          <Avatar img={images.hero1} alt="user" size="big" />
        </AvatarCluster>
      </div>
      <br />
      Compact avatar size:
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
        <AvatarCluster>
          <Avatar icon="folder" size="compact" />
          <Avatar text="HG" size="compact" />
          <Avatar img={images.hero1} alt="user" size="compact" />
        </AvatarCluster>
      </div>
      <br />
      <br />
      <strong>
        <code>stack='right'</code>
      </strong>
      <br />
      Default avatar size:
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
        <AvatarCluster stack="right">
          <Avatar icon="folder" />
          <Avatar text="HG" />
          <Avatar img={images.hero1} alt="user" />
        </AvatarCluster>
      </div>
      <br />
      Big avatar size:
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
        <AvatarCluster stack="right">
          <Avatar icon="folder" size="big" />
          <Avatar text="HG" size="big" />
          <Avatar img={images.hero1} alt="user" size="big" />
        </AvatarCluster>
      </div>
      <br />
      Compact avatar size:
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
        <AvatarCluster stack="right">
          <Avatar icon="folder" size="compact" />
          <Avatar text="HG" size="compact" />
          <Avatar img={images.hero1} alt="user" size="compact" />
        </AvatarCluster>
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
