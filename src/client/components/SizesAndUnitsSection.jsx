import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const SizesAndUnitsSection = () =>
    <div>
        <Heading level={2} children="Sizes and units (px, em, rem)" />
        <p>When writing CSS, the styleguide uses these rules:</p>
        <ul>
            <li>Sizes and spacing should be in REM's.</li>
            <li>Media queries should be in EM's.</li>
            <li>Pixels should not avoided.</li>
        </ul>
        <p>Source: <a href="http://engageinteractive.co.uk/blog/em-vs-rem-vs-px">EM vs REM vs PX – Why you shouldn't “just use pixels”</a></p>
    </div>;

export default SizesAndUnitsSection;