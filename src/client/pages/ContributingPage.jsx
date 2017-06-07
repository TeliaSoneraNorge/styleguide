import React from 'react';

import RepositorySection from '../components/RepositorySection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import WritingCssSection from '../components/WritingCssSection';

import Heading from '../../components/atoms/Heading/Heading';

import { getMergedMetadata } from '../../componentMetadata';
import { extractComponentNameFromPath, groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();
const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);

const ContributingPage = ({ colors }) =>
    <div className="content-wrapper">
        <Heading level={1} text="Contributing to the Styleguide" />
        <p>We welcome all frontend developers - in collaboration with designers - to contribute to the styleguide.</p>

        <RepositorySection />
        <WritingCssSection />
        <SizesAndUnitsSection />
    </div>;

export default ContributingPage;