import React from 'react';
import IconLink from './IconLink';

export default {
  title: 'Component library|Atoms/Icon Link',
};

export const Default = () => (
  <>

    <p>Default Link Icons</p>
    <IconLink icon="alarm" href="#" />


    <p>Black Link Icons</p>
    <IconLink icon="download" iconColor="black" href="#" />


    <p>Core Purple Link Icon</p>
    <IconLink icon="place" iconColor="core-purple" href="#" />


    <p>White Link Icons on Background</p>
    <div style={{ background: '#380354', padding: '1rem', display: 'inline-block' }}>

      <IconLink icon="twitter" iconColor="white" href="#" />
      <IconLink icon="like" iconColor="white" href="#" />
      <IconLink icon="heart-filled" iconColor="white" href="#" />

    </div>

  </>
);

export const Deprecated = () => (
  <>
    <IconLink iconName="ico_download" href="#" />
    <IconLink iconName="linkedin_icon" href="#" />
    <IconLink iconName="twitter_icon" href="#" />
  </>
)