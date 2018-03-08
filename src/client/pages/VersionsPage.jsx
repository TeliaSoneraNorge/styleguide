import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/molecules/Header/Header';

const VersionsPage = ({ versionsHtml }) =>
    <div>
        <Header iconUrl="/public/ico_code-2.svg" pageTitle="Versions">
            <p className="paragraph">
                This content was read from VERSIONS.md in the repository.
            </p>
        </Header>

        <div className="container container--small container--extra-margin-bottom">
            <p className="paragraph">To use the Telia Styleguide in your project, follow these steps:</p>
            <ol>
                <li>Download the styleguide assets and include them in your project.</li>
                <li>Link to the downloaded CSS file in your HTML:</li>
            </ol>
            <div dangerouslySetInnerHTML={{ __html: versionsHtml }}></div>
        </div>
    </div>;

const mapStateToProps = (state) => ({
    versionsHtml: state.versionsHtml
});

export default connect(mapStateToProps)(VersionsPage);