import React from 'react';
import { ListWithImage } from '@telia/styleguide';

const { Item } = ListWithImage;

const DefaultListWithImage = () => (
  <ListWithImage src={require('assets/website-images/woman-mobile.jpg')} alt="Woman in a car looking at her phone.">
    <Item>This is a list and image component.</Item>
    <Item>This is the default look of it.</Item>
    <Item>On smaller devices the image wraps under the list.</Item>
    <Item>It's recommended to have a maximum of four bullet points.</Item>
  </ListWithImage>
);

export default DefaultListWithImage;
