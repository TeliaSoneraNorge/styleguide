import React from 'react';
import { IconAnimated } from '@telia/styleguide';

const IconAnimatedExample = () => (
   <IconAnimated
        style={{
            height: 10,
            width: 10
        }}
        json={require('../../../../assets/animations/Music_freedom.json')}
    />
);

export default IconAnimatedExample;