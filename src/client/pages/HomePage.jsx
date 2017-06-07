import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import ColorsSection from '../components/ColorsSection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import TypographySection from '../components/TypographySection';

import Heading from '../../components/atoms/Heading/Heading';

import { getMergedMetadata } from '../../componentMetadata';
import { extractComponentNameFromPath, groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();
const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);

const HomePage = ({ colors }) =>
    <div className="content-wrapper">
        <Heading level={1} text="Telia Norge Styleguide" />
        <p>Welcome to the Telia Norge styleguide.</p>

        <ColorsSection colors={colors} />
        <TypographySection />
        <SizesAndUnitsSection />

        <h2 className="heading heading--level-2"><a href="/components">Components</a></h2>
        <Heading level={3} text="Atoms" />
        <ul>
            {_.map(groupedComponentMetadata.atoms, (metadata, path) =>
                <li key={path}>{extractComponentNameFromPath(path)} ({path})</li>
            )}
        </ul>
        <Heading level={3} text="Molecules" />
        <ul>
            {_.map(groupedComponentMetadata.molecules, (metadata, path) =>
                <li key={path}>{extractComponentNameFromPath(path)} ({path})</li>
            )}
        </ul>
        <Heading level={3} text="Organisms" />
        <ul>
            {_.isEmpty(groupedComponentMetadata.organisms) ? <li>(none)</li> : null}
            {_.map(groupedComponentMetadata.organisms, (metadata, path) =>
                <li key={path}>{extractComponentNameFromPath(path)} ({path})</li>
            )}
        </ul>
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors
});

export default connect(mapStateToProps)(HomePage);