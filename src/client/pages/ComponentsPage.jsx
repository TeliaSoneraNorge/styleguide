import React from 'react';

import Header from '../../components/molecules/Header/Header';

import HtmlComponent from '../components/HtmlComponent';
import ReactComponent from '../components/ReactComponent';

import { getMergedMetadata } from '../../componentMetadata';
import { extractComponentNameFromPath, groupComponentMetadataByType } from '../utils/componentUtil';

const componentMetadata = getMergedMetadata();

const ComponentList = ({ groupName, groupedComponentMetadata }) => {
    const componentPaths = _.chain(groupedComponentMetadata[groupName]).keys().sortBy().value();
    return (
        <ul>
            {_.map(componentPaths, (path) => {
                const componentName = extractComponentNameFromPath(path);
                return <li><a href={`/components/${groupName}#${componentName}`}>{componentName}</a></li>;
            })}
        </ul>
    );
}

const ComponentsPage = (props) => {
    const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);
    return (
        <div>
            <Header
                iconUrl="/public/ico_code-2.svg"
                pageTitle="Components"
                withMask={true}
                withContentOverlap={true}>
                <div>
                    Here are the <a className="link" href="http://bradfrost.com/blog/post/atomic-web-design/">Atom Design</a> components, split by category.
                </div>
            </Header>
            <div className="sg-components content-wrapper">
                <div className="focus-box">
                    <div className="focus-box__content-outer">
                        <div className="focus-box__content-inner">
                            <ul>
                                <li>
                                    <a href="/components/atoms">Atoms</a>
                                    <ComponentList groupName="atoms" groupedComponentMetadata={groupedComponentMetadata} />
                                </li>
                                <li>
                                    <a href="/components/molecules">Molecules</a>
                                    <ComponentList groupName="molecules" groupedComponentMetadata={groupedComponentMetadata} />
                                </li>
                                <li>
                                    <a href="/components/organisms">Organisms</a>
                                    <ComponentList groupName="organisms" groupedComponentMetadata={groupedComponentMetadata} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentsPage;