import React, { useState } from 'react';
import { ListWithImage } from '../../index';
import img from '../../stories/sampleImages'

export default {
  title: 'Component library/Molecules/ListWithImage',
  component: ListWithImage,
};

const { Item } = ListWithImage;

export const Default = () => (
  <ListWithImage src={img.womanMobile} alt="Woman in a car looking at her phone.">
    <Item>This is a list and image component.</Item>
    <Item>This is the default look of it.</Item>
    <Item>On smaller devices the image wraps under the list.</Item>
    <Item>It&#39;s recommended to have a maximum of four bullet points.</Item>
  </ListWithImage>
);

export const ImageTop = () => (
  <ListWithImage
    src={img.kidsIpad}
    alt="Two kids playing with a tablet"
    imagePosition="top"
  >
    <Item>
      This is the <code>imagePosition=&#34;top&#34;</code> variant.
    </Item>
    <Item>On smaller devices the list will wrap under the image.</Item>
    <Item>On larger screens, it looks the same.</Item>
  </ListWithImage>
);

export const ListRight = () => (
  <ListWithImage
    src={img.boyIpad}
    alt="Boy playing with a tablet in a bed"
    listPosition="right"
  >
    <Item>
      The <code>listPosition=&#34;right&#34;</code> variant shows the list on the right (large screens).
    </Item>
    <Item>On smaller devices the list will remain on the top, image on the bottom.</Item>
  </ListWithImage>
);

export const ListRightImageTop = () => (
  <ListWithImage
    src={img.boyIpad}
    alt="Boy playing with a tablet in a bed"
    listPosition="right"
    imagePosition="top"
  >
    <Item>
      The <code>listPosition=&#34;right&#34;</code> variant shows the list on the right (large screens).
    </Item>
    <Item>
      We have also specified <code>imagePosition=&#34;top&#34;</code>, so the image will be on the top on small screens.
    </Item>
  </ListWithImage>
);

export const MobileHiddenImage = () => (
  <ListWithImage
    src={img.boyIpad}
    alt="Boy playing with a tablet in a bed"
    hideImageForMobile
  >
    <Item>
      The <code>hideImageForMobile</code> variant hides the image on smaller screens.
    </Item>
    <Item>The image is hidden on browser width up to 640px.</Item>
  </ListWithImage>
);

export const ListWithImageAndHeading = () => (
  <ListWithImage
    src={img.womanMobile}
    alt="Woman in a car looking at her phone."
    heading="This is a level 3 heading"
  >
    <Item>This is a list and image component.</Item>
    <Item>This is the default look of it.</Item>
    <Item>On smaller devices the image wraps under the list.</Item>
    <Item>It&#39;s recommended to have a maximum of four bullet points.</Item>
  </ListWithImage>
);