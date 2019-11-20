import React from 'react';
import { Image, Caption } from '@telia/styleguide';

const InlineRight = () => (
  <div>
    <p>
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in,
      elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh
      pulvinar a. Donec sollicitudin molestie malesuada.
    </p>
    <Image src={require('assets/website-images/woman-mobile.jpg')} alt="Woman looking at mobile" inline="right">
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

export default InlineRight;
