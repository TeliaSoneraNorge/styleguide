import React from 'react';

/**
 * Status: *in progress*
 *
 * There should be a minimum of two- and a maximum of six boxes when using this component.
 **/
const ThemeBoxesWithImage = (props) =>
    <div className="theme-boxes theme-boxes-with-image">
        {props.children}
    </div>;

export default ThemeBoxesWithImage;