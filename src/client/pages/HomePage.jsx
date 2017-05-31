import _ from 'lodash';
import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';
import { getMergedMetadata } from '../../componentMetadata';
import { extractComponentNameFromPath, groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();
const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);

const HomePage = () =>
    <div className="content-wrapper">
        <Heading level={1} text="Telia Norge Styleguide" />
        <p>Welcome to the Telia Norge styleguide.</p>

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

export default HomePage;