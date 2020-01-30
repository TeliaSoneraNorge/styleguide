import React from 'react';
import Link from './Link';

export default {
  title: 'Component library|Atoms/Link',
  component: Link,
};

export const Default = () => <Link href="#" text="Standard text link" />

export const LinkWithIconAfter = () => <Link href="#" text="Link with icon after" icon="forward-icon" iconPosition="after" />

export const LinkWithIconBefore = () => <Link href="#" text="Link with icon before" icon="back-icon" iconPosition="before" />