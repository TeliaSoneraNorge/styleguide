import React from 'react';
import { FactBox } from '@telia/styleguide';

const DefaultFactBox = () => (
    <FactBox title="Fact about Lorem Ipsum:" iconSrc="/public/icons/ico_info.svg">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.</p>
        <p>Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
        <p>Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada.</p>
        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
    </FactBox>
);

export default DefaultFactBox;