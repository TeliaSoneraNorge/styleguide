import React from 'react';
import { ThemeBoxes } from '@telia/styleguide';
import { ThemeBoxWithImage } from '@telia/styleguide';

const ClosedThemeBoxesWithImage = () => (
  <ThemeBoxes>
    <ThemeBoxWithImage
        id="themebox-1"
        isExpanded={false}
        imageSrc="/public/website-images/themeBoxWithImage.jpg"
        heading="Closed themebox with image"
    />
  </ThemeBoxes>
);

export default ClosedThemeBoxesWithImage;