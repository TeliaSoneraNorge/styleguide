import React from 'react';
import ThemeBoxWithImage from './ThemeBoxWithImage';
import { ThemeBoxes } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Organisms/ThemeBoxWithImage',
  component: ThemeBoxWithImage,
};

export const Default = () => (
  <ThemeBoxes>
    <ThemeBoxWithImage
      id="themebox-1"
      isExpanded={false}
      imageSrc={img.themeBoxWithImage}
      heading="Themebox with image"
    />

    <ThemeBoxWithImage
      id="themebox-2"
      isExpanded={false}
      imageSrc={img.themeBoxWithImage}
      heading="Theme box with image and text"
    >
      <p className="theme-box__preamble paragraph">
        This is an example of what content you can have inside a ThemeBox. You can use text as we did here, but you can
        use other components from the styleguide as well.
      </p>
      <h3 className="heading heading--level-3">First level three heading</h3>
      <p className="paragraph">Donec rutrum congue leo eget malesuada.</p>
      <h3 className="heading heading--level-3">Second heading</h3>
      <p className="paragraph">
        Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
      </p>
      <h3 className="heading heading--level-3">Third heading</h3>
      <p className="paragraph">
        Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
      </p>
    </ThemeBoxWithImage>
  </ThemeBoxes>
);
