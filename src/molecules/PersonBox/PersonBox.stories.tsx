import React, { useState } from 'react';
import { PersonBox } from '../../index';

export default {
  title: 'Component library/Molecules/PersonBox',
  component: PersonBox,
};

export const Default = () => (
  <PersonBox
    id="box-1"
    color="pink"
    imagePath="http://via.placeholder.com/165x200"
    name="John Doe"
    title="Chief Executive Officer (CEO)"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    linkedInProfile="https://www.linkedin.com"
    twitterProfile="https://twitter.com"
  />
);

export const ExpandedPersonBox = () => (
  <PersonBox
    id="box-1"
    color="pink"
    imagePath="http://via.placeholder.com/165x200"
    name="John Doe"
    title="Chief Executive Officer (CEO)"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    linkedInProfile="www.linkedin.com"
    twitterProfile="www.twitter.com"
    isExpanded
  />
);