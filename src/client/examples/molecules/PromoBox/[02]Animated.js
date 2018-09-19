import React from 'react';
import { PromoBox } from '@telia/styleguide';

const AnimatedPromoBox = () => (
    <PromoBox
        animated
        imgSrc="/public/website-images/ico_databoost_with_sparkels.svg"
        imgAlt="databoost icon">
        <h2 className="heading heading--level-2 heading--pebble">Heading</h2>
        <p className="paragraph">Lorem ipsum dolor sit amet.</p>
    </PromoBox>
);

export default AnimatedPromoBox;