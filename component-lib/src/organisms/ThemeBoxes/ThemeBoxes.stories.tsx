import React from 'react';
import { ThemeBox, ThemeBoxes } from './index';
import { Icon, SvgIcon, colors } from '../../index';

export default {
  title: 'Component library|Organisms/ThemeBoxes',
  component: ThemeBoxes,
};

export const Defualt = () => (
  <ThemeBoxes>
    <ThemeBox
      id="themebox-1"
      isExpanded={false}
      iconSvg={<Icon icon="heart-filled" style={{ color: colors.corePurple }} />}
      heading="Themebox"
    />
    <ThemeBox
      id="themebox-2"
      isExpanded={false}
      iconSvg={<Icon icon="product-music-freedom" style={{ color: colors.black }} />}
      heading="Heading"
    />
  </ThemeBoxes>
);

export const Deprecated = () => (
  <ThemeBoxes>
    <ThemeBox
      id="themebox-1"
      isExpanded={false}
      iconSvg={<SvgIcon iconName="ico_heart" color="purple" />}
      heading="Themebox"
    />
    <ThemeBox
      id="themebox-2"
      isExpanded={false}
      iconSvg={<SvgIcon iconName="ico_music_freedom" color="black" />}
      heading="Heading"
    />
  </ThemeBoxes>
);
