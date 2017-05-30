import { getReactComponentsMetadata } from '../componentMetadata';

const componentMetadata = getReactComponentsMetadata();

// TODO: loop over 'doc' and auto-generate the code below

import Button from './atoms/Button/Button';
import ButtonExampleProps from './atoms/Button/ReactExampleProps';

import PageHeader from './molecules/PageHeader/PageHeader';
import PageHeaderExampleProps from './molecules/PageHeader/ReactExampleProps';

import PageFooter from './molecules/PageFooter/PageFooter';
import PageFooterExampleProps from './molecules/PageFooter/ReactExampleProps';

export default {
    'src/components/atoms/Button/Button.jsx': Button,
    'src/components/atoms/Button/Button.jsx/ReactExampleProps.js': ButtonExampleProps,

    'src/components/molecules/PageHeader/PageHeader.jsx': PageHeader,
    'src/components/molecules/PageHeader/PageHeader.jsx/ReactExampleProps.js': PageHeaderExampleProps,

    'src/components/molecules/PageFooter/PageFooter.jsx': PageFooter,
    'src/components/molecules/PageFooter/PageFooter.jsx/ReactExampleProps.js': PageFooterExampleProps,
};
