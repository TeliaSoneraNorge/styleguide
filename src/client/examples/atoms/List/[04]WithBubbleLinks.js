import React from 'react';
import { List } from '@telia/styleguide';

const { Item, BubbleLink } = List;

const ListWithLinks = () => (
    <List>
        <Item>
            <BubbleLink href="#"
                iconSvg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.84 37.84"><g data-name="Layer 2"><path d="M26.55 18.92h-5.23v18.92h-7.93V18.92H9.46v-6.74h3.77V7.82a10.86 10.86 0 0 1 .33-2.54 6.94 6.94 0 0 1 1.24-2.53A6.44 6.44 0 0 1 17.28.81a8.61 8.61 0 0 1 4-.81h6.31v6.31c-.81.05-1.51.05-2.16.05h-2.6a1.9 1.9 0 0 0-1.13.38c-.38.21-.54.75-.54 1.45v4h6z" data-name="Layer 1"/></g></svg>}
            >Facebook</BubbleLink>
        </Item>
        <Item>
            <BubbleLink href="#"
                iconSvg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.04 39.04"><g id="Layer_2" data-name="Layer 2"><path id="Layer_1-2" d="M48 4.62a19.69 19.69 0 0 1-5.66 1.55A9.89 9.89 0 0 0 46.71.72a19.72 19.72 0 0 1-6.26 2.39 9.86 9.86 0 0 0-17 6.74 9.94 9.94 0 0 0 .25 2.25A28 28 0 0 1 3.34 1.8 9.87 9.87 0 0 0 6.39 15a9.82 9.82 0 0 1-4.46-1.23v.12a9.86 9.86 0 0 0 7.91 9.66 9.87 9.87 0 0 1-4.45.17 9.87 9.87 0 0 0 9.21 6.85 19.78 19.78 0 0 1-12.25 4.18A20.05 20.05 0 0 1 0 34.61 27.9 27.9 0 0 0 15.11 39c18.13 0 28-15 28-28V9.73A20 20 0 0 0 48 4.62" data-name="Layer 1"/></g></svg>}

            >Twitter</BubbleLink>
        </Item>
    </List>
);

export default ListWithLinks;