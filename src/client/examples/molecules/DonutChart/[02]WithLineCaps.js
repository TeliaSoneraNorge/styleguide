import React from 'react';
import { DonutChart } from '@telia/styleguide';

const segments = [
    { color: 'purple', percent: 0.3 },
    { color: 'orange', percent: 0.4 },
    { color: 'green', percent: 0.1 }
];

const WithLineCaps = () => (
    <DonutChart
        value='21,6GB'
        totalFormatted='25GB'
        segments={segments}
        showLineCaps
    />
);

export default WithLineCaps;