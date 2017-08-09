import { getReactComponentsMetadata } from '../componentMetadata';

const componentMetadata = getReactComponentsMetadata();

// TODO: loop over 'doc' and auto-generate the code below

import Button from './atoms/Button/Button';
import Heading from './atoms/Heading/Heading';
import Link from './atoms/Link/Link';
import ToggleButton from './atoms/ToggleButton/ToggleButton';

import FocusBox from './molecules/FocusBox/FocusBox';
import Header from './molecules/Header/Header'
import PageFooter from './molecules/PageFooter/PageFooter';
import PageHeader from './molecules/PageHeader/PageHeader';

export default {
    'src/components/atoms/Button/Button.jsx': Button,
    'src/components/atoms/Heading/Heading.jsx': Heading,
    'src/components/atoms/Link/Link.jsx': Link,
    'src/components/atoms/ToggleButton/ToggleButton.jsx': ToggleButton,

    'src/components/molecules/FocusBox/FocusBox.jsx': FocusBox,
    'src/components/molecules/Header/Header.jsx': Header,
    'src/components/molecules/PageFooter/PageFooter.jsx': PageFooter,
    'src/components/molecules/PageHeader/PageHeader.jsx': PageHeader
};
