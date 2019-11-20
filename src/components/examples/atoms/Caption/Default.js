import React from 'react';
import { Caption } from '@telia/styleguide';

const DefaultCaption = () => (
  <Caption>
    This is a caption component that is meant to be used with the{' '}
    <a className="link" href="#Image">
      Image
    </a>{' '}
    or{' '}
    <a className="link" href="#Video">
      Video
    </a>{' '}
    components.
  </Caption>
);

export default DefaultCaption;
