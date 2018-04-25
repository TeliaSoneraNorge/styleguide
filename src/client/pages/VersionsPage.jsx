import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../../../component-lib/src/index';

const VersionsPage = ({ versionsHtml }) =>
    <div>
        <Header iconUrl="/public/ico_code-2.svg" pageTitle="Versions">
            <p className="paragraph">
                This content was read from VERSIONS.md in the repository.
            </p>
        </Header>

        <div className="container container--small container--extra-margin-bottom">
            <div dangerouslySetInnerHTML={{ __html: versionsHtml }}></div>
        </div>
    </div>;

const mapStateToProps = (state) => ({
    versionsHtml: state.versionsHtml
});

export default connect(mapStateToProps)(VersionsPage);