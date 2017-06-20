import React from 'react';
import { connect } from 'react-redux';

import ColorsSection from '../components/ColorsSection';
import GridSection from '../components/GridSection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import TypographySection from '../components/TypographySection';

import Heading from '../../components/atoms/Heading/Heading';

const HomePage = ({ colors }) =>
    <div className="content-wrapper">
        <Heading level={1} text="Telia Norge Styleguide" />
        <p>Welcome to the Telia Norge styleguide.</p>

        <ColorsSection colors={colors} />
        <TypographySection />
        <GridSection />
        <SizesAndUnitsSection />
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors
});

export default connect(mapStateToProps)(HomePage);