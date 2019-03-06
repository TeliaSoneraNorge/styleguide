import React from 'react';
import { Image, Caption } from '@telia/styleguide';

const DefaultImage = () => (
    <Image src={require('../../../../assets/website-images/kids-ipad.jpg')} alt="Kids playing with tablet">
        <Caption>
            Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.
        </Caption>
    </Image>
);

export default DefaultImage;