import { getReactComponentsMetadata } from '../componentMetadata';

const componentMetadata = getReactComponentsMetadata();

// TODO: loop over 'doc' and auto-generate the code below

// Atoms
import Box from './atoms/Box/Box';
import Button from './atoms/Button/Button';
import Heading from './atoms/Heading/Heading';
import Label from './atoms/Label/Label';
import Link from './atoms/Link/Link';
import ParallaxBlock from './atoms/ParallaxBlock/ParallaxBlock';
import ParallaxBlockSpacer from './atoms/ParallaxBlockSpacer/ParallaxBlockSpacer';
import ParallaxContainer from './atoms/ParallaxContainer/ParallaxContainer';
import ProgressBar from './atoms/ProgressBar/ProgressBar';
import Spinner from './atoms/Spinner/Spinner';
import ToggleButton from './atoms/ToggleButton/ToggleButton';

// Molecules
import AccordionList from './molecules/AccordionList/AccordionList';
import Alert from './molecules/Alert/Alert';
import CheckBoxWithLabel from './molecules/CheckBoxWithLabel/CheckBoxWithLabel';
import DonutChart from './molecules/DonutChart/DonutChart';
import FocusBox from './molecules/FocusBox/FocusBox';
import FocusSpinner from './molecules/FocusSpinner/FocusSpinner';
import Header from './molecules/Header/Header';
import ParallaxBlockTextBox from './molecules/ParallaxBlockTextBox/ParallaxBlockTextBox';
import PageFooter from './molecules/PageFooter/PageFooter';
import PageHeader from './molecules/PageHeader/PageHeader';
import PersonBox from './molecules/PersonBox/PersonBox';
import ProductPromoBox from './molecules/ProductPromoBox/ProductPromoBox';
import ProgressChart from './molecules/ProgressChart/ProgressChart';
import RadioButtonWithLabel from './molecules/RadioButtonWithLabel/RadioButtonWithLabel';
import Subscription from './molecules/Subscription/Subscription';
import ChartLegend from './molecules/ChartLegend/ChartLegend';
import TextBoxWithLabel from './molecules/TextBoxWithLabel/TextBoxWithLabel';

// Organisms
import FocusSubscription from './organisms/FocusSubscription/FocusSubscription';
import ContentRating from './organisms/ContentRating/ContentRating';

export default {
    // Atoms
    'src/components/atoms/Box/Box.jsx': Box,
    'src/components/atoms/Button/Button.jsx': Button,
    'src/components/atoms/Heading/Heading.jsx': Heading,
    'src/components/atoms/Label/Label.jsx': Label,
    'src/components/atoms/Link/Link.jsx': Link,
    'src/components/atoms/ParallaxBlock/ParallaxBlock.jsx': ParallaxBlock,
    'src/components/atoms/ParallaxBlockSpacer/ParallaxBlockSpacer.jsx': ParallaxBlockSpacer,
    'src/components/atoms/ParallaxContainer/ParallaxContainer.jsx': ParallaxContainer,
    'src/components/atoms/ProgressBar/ProgressBar.jsx': ProgressBar,
    'src/components/atoms/Spinner/Spinner.jsx': Spinner,
    'src/components/atoms/ToggleButton/ToggleButton.jsx': ToggleButton,

    // Molecules
    'src/components/molecules/AccordionList/AccordionList.jsx': AccordionList,
    'src/components/molecules/Alert/Alert.jsx': Alert,
    'src/components/molecules/CheckBoxWithLabel/CheckBoxWithLabel.jsx': CheckBoxWithLabel,
    'src/components/molecules/DonutChart/DonutChart.jsx': DonutChart,
    'src/components/molecules/FocusBox/FocusBox.jsx': FocusBox,
    'src/components/molecules/FocusSpinner/FocusSpinner.jsx': FocusSpinner,
    'src/components/molecules/Header/Header.jsx': Header,
    'src/components/molecules/PageFooter/PageFooter.jsx': PageFooter,
    'src/components/molecules/PageHeader/PageHeader.jsx': PageHeader,
    'src/components/molecules/ParallaxBlockTextBox/ParallaxBlockTextBox.jsx': ParallaxBlockTextBox,
    'src/components/molecules/PersonBox/PersonBox.jsx': PersonBox,
    'src/components/molecules/ProductPromoBox/ProductPromoBox.jsx' : ProductPromoBox,
    'src/components/molecules/ProgressChart/ProgressChart.jsx': ProgressChart,
    'src/components/molecules/RadioButtonWithLabel/RadioButtonWithLabel.jsx': RadioButtonWithLabel,
    'src/components/molecules/Subscription/Subscription.jsx': Subscription,
    'src/components/molecules/ChartLegend/ChartLegend.jsx': ChartLegend,
    'src/components/molecules/TextBoxWithLabel/TextBoxWithLabel.jsx': TextBoxWithLabel,

    // Organisms
    'src/components/organisms/FocusSubscription/FocusSubscription.jsx': FocusSubscription,
    'src/components/organisms/ContentRating/ContentRating.jsx' : ContentRating
};
