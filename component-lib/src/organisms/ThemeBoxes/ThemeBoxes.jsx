import React from 'react';

import ThemeBox from './ThemeBox';

/**
 * Status: *in progress*
 *
 * There should be a minimum of two- and a maximum of six boxes when using this component.
 **/
const ThemeBoxes = ({ themeBoxes }) =>
    <div className="theme-boxes">
        {themeBoxes.map((themeBoxProps, i) =>
            <ThemeBox key={i} {...themeBoxProps} />)}
    </div>;

export default ThemeBoxes;