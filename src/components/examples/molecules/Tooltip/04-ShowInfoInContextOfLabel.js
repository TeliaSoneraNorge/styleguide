import React from 'react';
import { Tooltip } from 'component-lib';

const ShowInfoInContextOfALabel = () => (
    <Tooltip
        label="Label text"
        text="This is a standalone tooltip."
        isExpanded />
);

export default ShowInfoInContextOfALabel;