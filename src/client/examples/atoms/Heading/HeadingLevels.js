import React from 'react';
import { Heading } from '@telia/styleguide';

const HeadingLevels = () => (
    <div>
        <Heading level={1} text="This is a level 1 heading" />
        <Heading level={2} className="heading--pebble" text="This is a level 2 pebble heading" />
        <Heading level={2} text="This is a level 2 heading" />
        <Heading level={3} text="This is a level 3 heading" />
        <Heading level={4} text="This is a level 4 heading" />
    </div>
);

export default HeadingLevels;