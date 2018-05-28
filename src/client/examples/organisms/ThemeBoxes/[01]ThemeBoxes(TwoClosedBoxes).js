import React, { Component } from 'react';
import { ThemeBoxes } from '@telia/styleguide';

const TwoClosedBoxes = () => (
    <ThemeBoxes themeBoxes={[
        {
            id: 'themebox-1',
            isExpanded: false,
            iconSvg: '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 51 45\"><path fill=\"#231F20\" fill-rule=\"evenodd\" d=\"M35.408.78c-5.137 0-8.379 4.564-10.26 6.824C23.266 5.344 20.024.78 14.885.78 6.14.78.264 8.882.264 16.45c0 11.015 21.16 25.779 23.573 27.426a2.32 2.32 0 0 0 2.621 0c2.413-1.647 23.572-16.41 23.572-27.427C50.03 8.882 44.155.78 35.408.78\"/></svg>',
            heading: 'Themebox'
        },
        {
            id: 'themebox-2',
            isExpanded: false,
            iconSvg: '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 51 45\"><path fill=\"#231F20\" fill-rule=\"evenodd\" d=\"M35.408.78c-5.137 0-8.379 4.564-10.26 6.824C23.266 5.344 20.024.78 14.885.78 6.14.78.264 8.882.264 16.45c0 11.015 21.16 25.779 23.573 27.426a2.32 2.32 0 0 0 2.621 0c2.413-1.647 23.572-16.41 23.572-27.427C50.03 8.882 44.155.78 35.408.78\"/></svg>',
            heading: 'Heading'
        }
    ]}/>
);

export default TwoClosedBoxes;
