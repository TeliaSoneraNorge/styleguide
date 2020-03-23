import React from 'react';
import { Link, colors } from '../../index';

export default {
  title: 'Component library|Atoms/Link',
  component: Link,
};

export const Default = () => (
  <>
    <Link href="#">
      Standard text link
    </Link>
    <br />
    <br />
    <div style={{ background: colors.deepPurple }}>
      <Link href="#" negative={true}>
        Standard text link on dark background
      </Link>
    </div>
  </>
);

export const LinkWithIconOnPositive = () => (
  <>
    <Link href="#" icon="arrow-left" iconPosition="before">
      Link with icon before
    </Link>
    <br />
    <Link href="#" icon="arrow-left" iconPosition="before" iconColor="core-purple">
      Link with icon before
    </Link>
    <br />
    <Link href="#" icon="arrow-left" iconPosition="before" iconColor="black">
      Link with icon before
    </Link>
    <br />
    <Link href="#" icon="arrow-right" iconPosition="after">
      Link with icon after
    </Link>
    <br />
    <Link href="#" icon="arrow-right" iconPosition="after" iconColor="core-purple">
      Link with icon after
    </Link>
    <br />
    <Link href="#" icon="arrow-right" iconPosition="after" iconColor="black">
      Link with icon after
    </Link>
  </>
);

export const LinkWithIconOnNegative = () => (
  <div style={{ background: colors.deepPurple, padding: '1rem' }}>
    <Link href="#" negative={true} icon="arrow-left" iconPosition="before" iconColor="white">
      Link with icon before
    </Link>
    <br />
    <Link href="#" negative={true} icon="arrow-right" iconPosition="after" iconColor="white">
      Link with icon after
    </Link>
  </div>
);

export const BubbleLink = () => (
  <>
    <Link type="bubble-link" href="#" icon="play" >
      Core-Purple BubbleLink
    </Link>
    <br /><br />

    <Link type="bubble-link" href="#" icon="settings" iconColor="black">
      Black BubbleLink
    </Link>
    <br /><br />

    <div style={{ background: colors.deepPurple, padding: '1rem' }}>
      <Link type="bubble-link" href="#" icon="product-svitsj" iconColor="white">
        BubbleLink on dark background
      </Link>
    </div>
    
    <br />
  </>
);

export const DeprecatedIcons = () => (
  <>
    <Link href="#" icon="back-icon" iconPosition="before">
      Link with icon before
    </Link>
    <br />
    <Link href="#" icon="forward-icon" iconPosition="after">
      Link with icon after
    </Link>
    <br />
  </>
);