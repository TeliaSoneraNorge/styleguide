import { getReactComponentsMetadata } from '../componentMetadata';

const componentMetadata = getReactComponentsMetadata();

// TODO: loop over 'doc' and auto-generate the code below

import Box from './atoms/Box/Box';
import Button from './atoms/Button/Button';
import Heading from './atoms/Heading/Heading';
import Link from './atoms/Link/Link';
import ToggleButton from './atoms/ToggleButton/ToggleButton';
import Spinner from './atoms/Spinner/Spinner';
import ProgressBar from './atoms/ProgressBar/ProgressBar';
import ParallaxBlock from './atoms/ParallaxBlock/ParallaxBlock';
import ParallaxBlockSpacer from './atoms/ParallaxBlockSpacer/ParallaxBlockSpacer';
import ParallaxContainer from './atoms/ParallaxContainer/ParallaxContainer';

import Alert from './molecules/Alert/Alert';
import FocusBox from './molecules/FocusBox/FocusBox';
import Header from './molecules/Header/Header';
import ParallaxBlockTextBox from './molecules/ParallaxBlockTextBox/ParallaxBlockTextBox';
import PageFooter from './molecules/PageFooter/PageFooter';
import PageHeader from './molecules/PageHeader/PageHeader';
import PersonBox from './molecules/PersonBox/PersonBox';
import Subscription from './molecules/Subscription/Subscription';
import DonutChart from './molecules/DonutChart/DonutChart';
import ProgressChart from './molecules/ProgressChart/ProgressChart';


export default {
    'src/components/atoms/Box/Box.jsx': Box,
    'src/components/atoms/Button/Button.jsx': Button,
    'src/components/atoms/Heading/Heading.jsx': Heading,
    'src/components/atoms/Link/Link.jsx': Link,
    'src/components/atoms/ParallaxBlock/ParallaxBlock.jsx': ParallaxBlock,
    'src/components/atoms/ParallaxBlockSpacer/ParallaxBlockSpacer.jsx': ParallaxBlockSpacer,
    'src/components/atoms/ParallaxContainer/ParallaxContainer.jsx': ParallaxContainer,
    'src/components/atoms/ProgressBar/ProgressBar.jsx': ProgressBar,
    'src/components/atoms/Spinner/Spinner.jsx': Spinner,
    'src/components/atoms/ToggleButton/ToggleButton.jsx': ToggleButton,

    'src/components/molecules/Alert/Alert.jsx': Alert,
    'src/components/molecules/DonutChart/DonutChart.jsx': DonutChart,
    'src/components/molecules/FocusBox/FocusBox.jsx': FocusBox,
    'src/components/molecules/Header/Header.jsx': Header,
    'src/components/molecules/PageFooter/PageFooter.jsx': PageFooter,
    'src/components/molecules/PageHeader/PageHeader.jsx': PageHeader,
    'src/components/molecules/ParallaxBlockTextBox/ParallaxBlockTextBox.jsx': ParallaxBlockTextBox,
    'src/components/molecules/PersonBox/PersonBox.jsx': PersonBox,
    'src/components/molecules/ProgressChart/ProgressChart.jsx': ProgressChart,
    'src/components/molecules/Subscription/Subscription.jsx': Subscription
};
