import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

const TypeSearch = () => (
    <TextBoxWithLabel
        labelText="Label for search box"
        type="search"
        withIcon={true}
        iconSvg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path fill-rule="evenodd" d="M16.536 16.51a1.541 1.541 0 0 1-2.18 0l-2.369-2.368a7.692 7.692 0 0 1-4.253 1.276 7.698 7.698 0 0 1-5.453-2.257 7.713 7.713 0 0 1 10.91-10.904 7.715 7.715 0 0 1 .977 9.704l2.368 2.368a1.541 1.541 0 0 1 0 2.181zm-8.8-14.583a5.749 5.749 0 0 0-4.088 1.694 5.791 5.791 0 0 0 0 8.176 5.749 5.749 0 0 0 4.089 1.694 5.749 5.749 0 0 0 4.09-1.694 5.786 5.786 0 0 0 0-8.176 5.753 5.753 0 0 0-4.09-1.694z"/></svg>}
        />
);

export default TypeSearch;