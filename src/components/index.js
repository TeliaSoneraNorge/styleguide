import { getReactComponentsMetadata } from '../componentMetadata';

const componentMetadata = getReactComponentsMetadata();

// TODO: loop over 'doc' and auto-generate the code below

import Button from './atoms/Button/Button';
import ButtonExampleProps from './atoms/Button/ReactExampleProps';

export default {
    'src/components/atoms/Button/Button.jsx': Button,
    'src/components/atoms/Button/Button.jsx/ReactExampleProps.js': ButtonExampleProps
};
