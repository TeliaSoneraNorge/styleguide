import React, { useState } from 'react';
import { PromoBox } from '../../index';

export default {
  title: 'Component library|Molecules/PromoBox',
  component: PromoBox,
};

export const Default = () => (
  <PromoBox>
    <div className="rich-text">
      <h2 className="heading heading--level-2">Heading</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
  </PromoBox>
);

export const AnimatedPromoBox = () => (
  <PromoBox animated imgSrc={require('../../stories/assets/ico_databoost_with_sparkels.svg')} imgAlt="databoost icon">
    <div className="rich-text">
      <h2 className="heading heading--level-2">Heading</h2>
      <p className="paragraph">Lorem ipsum dolor sit amet.</p>
    </div>
  </PromoBox>
);