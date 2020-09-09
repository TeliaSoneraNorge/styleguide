import React from 'react';
import Tags from './Tags';

export default {
  title: 'Component library/Atoms/Tags',
  component: Tags,
};

export const Default = () => {

  const { Tag } = Tags;
  
  return (

    <Tags>
      <Tag>Technology</Tag>
      <Tag>Music</Tag>
      <Tag>Streaming</Tag>
    </Tags>

  )
};

export const Color = () => {

  const { Tag } = Tags;
  
  return (

    <Tags color="dark-grey">
      <Tag>Technology</Tag>
      <Tag>Music</Tag>
      <Tag>Streaming</Tag>
    </Tags>

  )
};