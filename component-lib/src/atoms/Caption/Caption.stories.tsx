import React from 'react';
import Caption from './Caption';


export default {
  title: 'Component library|Atoms/Caption',
  component: Caption,
};

export const DefaultCaption = () => (
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