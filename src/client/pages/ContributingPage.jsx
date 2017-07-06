import React from 'react';

import RepositorySection from '../components/RepositorySection';
import SizesAndUnitsSection from '../components/SizesAndUnitsSection';
import WritingCssSection from '../components/WritingCssSection';

import Heading from '../../components/atoms/Heading/Heading';

const ContributingPage = ({ colors }) =>
    <div className="content-wrapper">
        <Heading level={1} children="Contributing to the Styleguide" />
        <p>We welcome all frontend developers - in collaboration with designers - to contribute to the styleguide.</p>

        <RepositorySection />
        <WritingCssSection />
        <SizesAndUnitsSection />
    </div>;

export default ContributingPage;