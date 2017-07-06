import React from 'react';
import { connect } from 'react-redux';

import ColorsSection from '../components/ColorsSection';
import VariablesSection from '../components/VariablesSection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import TypographySection from '../components/TypographySection';

import Header from '../../components/molecules/Header/Header';

const HomePage = ({ colors, variablesCss }) =>
    <div>
        <Header
            iconUrl="/public/icons/ico_favourites.svg"
            runningTitle="Welcome to the"
            pageTitle="Telia Norge Styleguide"
            withMask
        >
            <p>
                Have a look around! See something you like?
            </p>
            <p>
                You can download the styleguide and use the styles
                in your own project. You can even make a contribution to it if there is something missing that other
                channels would also benefit from.
            </p>

        </Header>

        <div className="content-wrapper">
            <ColorsSection colors={colors} />
            <TypographySection />
            <VariablesSection variablesCss={variablesCss} />
            <SizesAndUnitsSection />
        </div>
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors,
    variablesCss: state.variablesCss
});

export default connect(mapStateToProps)(HomePage);