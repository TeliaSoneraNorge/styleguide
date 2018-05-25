import React from 'react';
import { ThemeBoxesWithImage } from '@telia/styleguide';
import { ThemeBoxWithImage } from '@telia/styleguide';

const OpenThemeBoxesWithImage = () => (
    <ThemeBoxesWithImage>
        <ThemeBoxWithImage id="themebox-1"
                           isExpanded={true}
                           imageSrc="/public/website-images/themeBoxWithImage.jpg"
                           heading="Open themebox with image">
            <p className="theme-box__preamble paragraph">This is an example of what content you can have inside a ThemeBox. You can use text as we did here, but you can use other components from the styleguide as well.</p>
            <h3 className="heading heading--level-3">First level three heading</h3>
            <p className="paragraph">Donec rutrum congue leo eget malesuada.</p>
            <h3 className="heading heading--level-3">Second heading</h3>
            <p className="paragraph">Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.</p>
            <h3 className="heading heading--level-3">Third heading</h3>
            <p className="paragraph">Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.</p>
        </ThemeBoxWithImage>
    </ThemeBoxesWithImage>
);

export default OpenThemeBoxesWithImage;