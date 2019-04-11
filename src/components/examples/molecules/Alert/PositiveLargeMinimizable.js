import React from 'react';
import { StatefulAlert } from 'component-lib';

const PositiveLargeMinimizable = () => (
    <StatefulAlert kind="positive" size="large" minimizedText="CLICK" minimizable>
        <p>
            This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </p>
    </StatefulAlert>
);

export default PositiveLargeMinimizable;