import React from 'react';
import { connect } from 'react-redux';

import ColorsSection from '../components/ColorsSection';
import VariablesSection from '../components/VariablesSection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import TypographySection from '../components/TypographySection';

import Header from '../../components/molecules/Header/Header.jsx';

const HomePage = ({ colors, variablesCss }) =>
    <div>
        <Header
            iconUrl="/public/ico_code-2.svg"
            runningTitle="Greetings, Earthlings!"
            pageTitle="Telia Norge Styleguide"
            withMask={true}>
            <p>
                This is a not-yet-ready-for-production, work-in-progress, pre-alpha version of the new Styleguide. You can look, but don't touch (yet).
            </p>
            <p>
                When we roll this out to production, you will be the first to know. Until then, take a look around, and if you have any questions or
                suggestions we are available on the #styleguide channel on Slack. Peace.
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