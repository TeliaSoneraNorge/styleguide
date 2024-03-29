import React from 'react';
import { FactBox } from '../../index';

export default {
  title: 'Component library/Molecules/FactBox',
  component: FactBox,
};

export const Default = () => (
  <FactBox title="Fact about Lorem Ipsum:" iconName="ico_info">
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
      Pellentesque in ipsum id orci porta dapibus.
    </p>
    <p className="paragraph">
      Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium
      ut lacinia in, elementum id enim.
    </p>
    <p className="paragraph">
      Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget
      malesuada.
    </p>
    <p className="paragraph">
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis
      porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
    </p>
  </FactBox>
);

export const FactBoxWithCenteredIcon = () => (
  <FactBox title="Fact about Lorem Ipsum:" iconName="ico_info" centerIcon>
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
      Pellentesque in ipsum id orci porta dapibus.
    </p>
    <p className="paragraph">
      Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium
      ut lacinia in, elementum id enim.
    </p>
    <p className="paragraph">
      Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget
      malesuada.
    </p>
    <p className="paragraph">
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis
      porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
    </p>
  </FactBox>
);

export const FactBoxWithImage = () => (
  <FactBox title="Fact about Lorem Ipsum:" imgSrc="http://placekitten.com/310/500" imgAlt="Kitten">
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
      Pellentesque in ipsum id orci porta dapibus.
    </p>
    <p className="paragraph">
      Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium
      ut lacinia in, elementum id enim.
    </p>
    <p className="paragraph">
      Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget
      malesuada.
    </p>
    <p className="paragraph">
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis
      porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
    </p>
  </FactBox>
);
