import React from 'react';
import { Link, colors } from '../../index';

export default {
  title: 'Component library|Atoms/Link',
  component: Link,
};

export const Default = () => (
  <>
    <Link href="#" text="Standard text link" />
    <br />
    <br />
    <div style={{ background: colors.deepPurple }}>
      <Link href="#" negative={true} text="Link with icon after" icon="arrow-right" />
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

export const Deprecated = () => (
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
