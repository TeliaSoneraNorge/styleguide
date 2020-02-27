import React from 'react';
// import Link from './Link';
import { Link, colors } from '../../index';

export default {
  title: 'Component library|Atoms/Link',
  component: Link,
};

export const Default = () => (
  <>
    <Link href="#" text="Standard text link" />
    <br/>
    <br/>
    <div style={{ background: colors.deepPurple }}>
      <Link href="#" negative={true} text="Link with icon after" icon="arrow-right" />
    </div>
  </>
);

export const LinkWithIconOnPositive = () => (
  <>
    <Link href="#" text="Link with icon before" icon="arrow-left" iconPosition="before" iconColor="black" />
    <br/>
    <Link href="#" text="Link with icon after" icon="arrow-right" iconPosition="after"  />
  </>
);

export const LinkWithIconOnNegative = () => (
  <div style={{ background: colors.deepPurple, padding: '1rem' }}>
    <Link href="#" negative={true} text="Link with icon after" icon="arrow-left" iconPosition="before" iconColor="white"  />
    <br/>
    <Link href="#" negative={true} text="Link with icon after" icon="arrow-right" iconPosition="after" iconColor="white"  />
  </div>
);
