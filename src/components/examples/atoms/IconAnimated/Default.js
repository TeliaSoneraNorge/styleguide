import React from 'react';
import { IconAnimated } from 'component-lib';

const IconAnimatedExample = () => (
    <IconAnimated
        style={{
            height: 10,
            width: 10
        }}
        json={require('../../../../assets/animations/music_freedom.json')} />
);

export default IconAnimatedExample;