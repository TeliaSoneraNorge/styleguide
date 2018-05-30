import React from 'react';
import { ThemeBoxesWithImage } from '@telia/styleguide';
import { ThemeBoxWithImage } from '@telia/styleguide';

const ClosedThemeBoxesWithImage = () => (
  <ThemeBoxesWithImage>
    <ThemeBoxWithImage
        id="themebox-1"
        isExpanded={false}
        imageSrc="/public/website-images/themeBoxWithImage.jpg"
        heading="Closed themebox with image"
    />
  </ThemeBoxesWithImage>
);

export default ClosedThemeBoxesWithImage;