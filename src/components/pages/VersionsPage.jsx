import React from 'react';

import { Header } from '../../../component-lib/src/index';
import { getStaticData } from '../../utils/staticDataUtil';

const versionsHtml = getStaticData('versionsHtml');

const VersionsPage = () =>
    <div>
        <Header iconName="ico_code-2" pageTitle="Versions">
            <p className="paragraph">
                This content was read from VERSIONS.md in the repository.
            </p>
        </Header>

        <div className="container container--small container--extra-margin-bottom">
            <div dangerouslySetInnerHTML={{ __html: versionsHtml }}></div>
        </div>
    </div>;

export default VersionsPage;