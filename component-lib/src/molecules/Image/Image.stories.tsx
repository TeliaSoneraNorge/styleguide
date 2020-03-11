import React from 'react';
import { Image, Caption } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/Image',
  component: Image,
};

export const Default = () => (
  <Image src={img.kidsIpad} alt="Kids playing with tablet">
    <Caption>
      Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in
      ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget
      malesuada.
    </Caption>
  </Image>
);

export const InlineLeft = () => (
  <div>
    <Image src={img.womanHoldingIpad} alt="Woman looking at tablet" inline="left">
      <Caption>Woman looking at tablet</Caption>
    </Image>
    <p>
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in,
      elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh
      pulvinar a. Donec sollicitudin molestie malesuada.
    </p>
    <p>
      Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum
      id enim. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
      dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta
      dapibus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor
      accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
      velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
  </div>
);

export const InlineRight = () => (
  <div>
    <p>
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in,
      elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh
      pulvinar a. Donec sollicitudin molestie malesuada.
    </p>
    <Image src={img.womanMobile} alt="Woman looking at mobile" inline="right">
      <Caption>Woman looking at mobile</Caption>
    </Image>
    <p>
      Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum
      id enim. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
      dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta
      dapibus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor
      accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
      velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
  </div>
);

export const SmallImageInline = () => (
  <div>
    <Image
      src={img.businessDevelopmentPebble}
      alt="Woman looking at tablet"
      inline="left"
    />
    <p>
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in,
      elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh
      pulvinar a. Donec sollicitudin molestie malesuada.
    </p>
    <Image
      src={img.businessDevelopmentPebble}
      alt="Woman looking at mobile"
      inline="right"
    />
    <p>
      Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum
      id enim. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
      dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta
      dapibus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor
      accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
      velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
  </div>
);