import React from 'react';
import { connect } from 'react-redux';

import ColorsSection from '../components/ColorsSection';
import VariablesSection from '../components/VariablesSection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import TypographySection from '../components/TypographySection';

import Heading from '../../components/atoms/Heading/Heading';

const HomePage = ({ colors, variablesCss }) =>
    <div className="content-wrapper">
        <Heading level={1} text="Telia Norge Styleguide" />
        <p>Welcome to the Telia Norge styleguide.</p>

        <ColorsSection colors={colors} />
        <TypographySection />
        <VariablesSection variablesCss={variablesCss} />
        <SizesAndUnitsSection />
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors,
    variablesCss: state.variablesCss
});

export default connect(mapStateToProps)(HomePage);