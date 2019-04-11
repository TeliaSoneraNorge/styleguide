import React from 'react';
import { ListWithImage } from 'component-lib';

const { Item } = ListWithImage;

const ListRight = () => (
    <ListWithImage src={require('../../../../assets/website-images/boy-ipad.jpg')} alt="Boy playing with a tablet in a bed" listPosition="right">
        <Item>The <code>listPosition="right"</code> variant shows the list on the right (large screens).</Item>
        <Item>On smaller devices the list will remain on the top, image on the bottom.</Item>
    </ListWithImage>
);

export default ListRight;