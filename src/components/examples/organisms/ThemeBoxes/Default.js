import React from 'react';
import { ThemeBoxes, ThemeBox, SvgIcon } from 'component-lib';

const TwoClosedBoxes = () => (
    <ThemeBoxes>
        <ThemeBox
            id="themebox-1"
            isExpanded={false}
            iconSvg={<SvgIcon iconName="ico_heart" color="purple" />}
            heading="Themebox" />
        <ThemeBox
            id="themebox-2"
            isExpanded={false}
            iconSvg={<SvgIcon iconName="ico_heart" color="purple" />}
            heading="Heading" />
    </ThemeBoxes>
);

export default TwoClosedBoxes;