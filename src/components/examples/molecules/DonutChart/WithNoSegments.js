import React from 'react';
import { DonutChart } from 'component-lib';

const WithNoSegments = () => (
    <DonutChart
        value="21,6GB"
        totalFormatted="25GB"
        showLineCaps
        showSegmentSeparators />
);

export default WithNoSegments;