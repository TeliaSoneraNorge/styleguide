import { getReactComponentsMetadata } from '../componentMetadata';

const componentMetadata = getReactComponentsMetadata();

// TODO: loop over 'doc' and auto-generate the code below

import Button from './atoms/Button/Button';
import Heading from './atoms/Heading/Heading';
import Link from './atoms/Link/Link';
import ToggleButton from './atoms/ToggleButton/ToggleButton';
import Spinner from './atoms/Spinner/Spinner';
import ProgressBar from './atoms/ProgressBar/ProgressBar';

import Alert from './molecules/Alert/Alert';
import FocusBox from './molecules/FocusBox/FocusBox';
import Header from './molecules/Header/Header'
import PageFooter from './molecules/PageFooter/PageFooter';
import PageHeader from './molecules/PageHeader/PageHeader';
import Subscription from './molecules/Subscription/Subscription';
import DonutChart from './molecules/DonutChart/DonutChart';
import ProgressChart from './molecules/ProgressChart/ProgressChart';

export default {
    'src/components/atoms/Button/Button.jsx': Button,
    'src/components/atoms/Heading/Heading.jsx': Heading,
    'src/components/atoms/Link/Link.jsx': Link,
    'src/components/atoms/ProgressBar/ProgressBar.jsx': ProgressBar,
    'src/components/atoms/Spinner/Spinner.jsx': Spinner,
    'src/components/atoms/ToggleButton/ToggleButton.jsx': ToggleButton,

    'src/components/molecules/Alert/Alert.jsx': Alert,
    'src/components/molecules/DonutChart/DonutChart.jsx': DonutChart,
    'src/components/molecules/FocusBox/FocusBox.jsx': FocusBox,
    'src/components/molecules/Header/Header.jsx': Header,
    'src/components/molecules/PageFooter/PageFooter.jsx': PageFooter,
    'src/components/molecules/PageHeader/PageHeader.jsx': PageHeader,
    'src/components/molecules/ProgressChart/ProgressChart.jsx': ProgressChart,
    'src/components/molecules/Subscription/Subscription.jsx': Subscription
};
