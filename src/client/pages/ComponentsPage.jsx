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
            {_.map(componentPaths, (path, i) => {
                const componentName = extractComponentNameFromPath(path);
                return <li key={i}><a className="link" href={`/components/${groupName}#${componentName}`}>{componentName}</a></li>;
            })}
        </ul>
    );
};

const ComponentsPage = (props) => {
    const groupedComponentMetadata = groupComponentMetadataByType(componentMetadata);
    return (
        <div>
            <Header
                iconUrl="/public/ico_code-2.svg"
                pageTitle="Components"
                withMask={false}
                withContentOverlap={false}>
                <div>
                    Here are the <a className="link" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> components, split by category.
                </div>
            </Header>
            <div className="container container--small container--extra-margin-bottom">
                <h2 className="heading heading--level-2"><a className="link" href="/components/atoms">Atoms</a></h2>
                <ComponentList groupName="atoms" groupedComponentMetadata={groupedComponentMetadata} />

                <h2 className="heading heading--level-2"><a className="link" href="/components/molecules">Molecules</a></h2>
                <ComponentList groupName="molecules" groupedComponentMetadata={groupedComponentMetadata} />

                <h2 className="heading heading--level-2"><a className="link" href="/components/organisms">Organisms</a></h2>
                <ComponentList groupName="organisms" groupedComponentMetadata={groupedComponentMetadata} />

                <h2 className="heading heading--level-2">Pages</h2>
                <ul>
                    <li><a className="link" href="/subscription">Subscription list page</a></li>
                    <li><a className="link" href="/information-article-1">Information article 1</a> - basic components (FullWidthImage, Accordion, etc)</li>
                    <li><a className="link" href="/information-article-2">Information article 2</a> - with NumberBoxes</li>
                    <li><a className="link" href="/information-article-3">Information article 3</a> - with StepByStep</li>
                    <li><a className="link" href="/information-article-4">Information article 4</a> - with table</li>
                    <li><a className="link" href="/pebbles-page">Pebble page</a></li>
                    <li><a className="link" href="/box-grid">Box Grid page</a></li>
                    <li><a className="link" href="/blog-1">Blog page 1</a></li>
                    <li><a className="link" href="/blog-2">Blog page 2</a></li>
                    <li><a className="link" href="/parallax-page">Parallax page</a></li>
                    <li><a className="link" href="/forms">Forms</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ComponentsPage;