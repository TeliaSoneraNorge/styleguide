import React from 'react';
import { PromoBox } from '@telia/styleguide';

const AnimatedPromoBox = () => (
    <PromoBox
        animated
        imgSrc={require('../../../../assets/website-images/ico_databoost_with_sparkels.svg')}
        imgAlt="databoost icon">
        <div className="rich-text">
            <h2 className="heading heading--level-2">Heading</h2>
            <p className="paragraph">Lorem ipsum dolor sit amet.</p>
        </div>
    </PromoBox>
);

export default AnimatedPromoBox;