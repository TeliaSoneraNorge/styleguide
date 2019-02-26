import _ from 'lodash';
import React from 'react';

import { Header } from '../../../component-lib/src/index';
import { getComponents } from '../../utils/componentUtil';

const ComponentList = ({ type, components }) => {
    return (
        <ul className="list list--links">
            {_.map(components, (component) =>
                <li className="list__item" key={component.name}>
                    <a className="list__link" href={`/components/${type}#${component.name}`}>{component.name}</a>
                </li>
            )}
        </ul>
    );
};

const ComponentsPage = () => {
    const allComponents = getComponents();

    return (
        <div>
            <Header
                iconName="ico_code-2"
                pageTitle="Components"
                withMask={false}
                withContentOverlap={false}>
                <div>
                    Here are the <a className="link" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> components, split by category.
                </div>
            </Header>
            <div className="container container--small container--extra-margin-bottom">
                <h2 className="heading heading--level-2"><a className="link" href="/components/atoms">Atoms</a></h2>
                <ComponentList type="atoms" components={allComponents['atoms']} />

                <h2 className="heading heading--level-2"><a className="link" href="/components/molecules">Molecules</a></h2>
                <ComponentList type="molecules" components={allComponents['molecules']} />

                <h2 className="heading heading--level-2"><a className="link" href="/components/organisms">Organisms</a></h2>
                <ComponentList type="organisms" components={allComponents['organisms']} />

                <h2 className="heading heading--level-2">Pages</h2>
                <ul className="list list--links">
                    <li className="list__item"><a className="list__link" href="/subscriptions">Subscription list page</a></li>
                    <li className="list__item"><a className="list__link" href="/tabs">Tabs</a></li>
                    <li className="list__item"><a className="list__link" href="/information-article-1">Information article 1</a> - basic components</li>
                    <li className="list__item"><a className="list__link" href="/information-article-2">Information article 2</a></li>
                    <li className="list__item"><a className="list__link" href="/information-article-3">Information article 3</a> - with StepByStep</li>
                    <li className="list__item"><a className="list__link" href="/information-article-4">Information article 4</a> - with table</li>
                    <li className="list__item"><a className="list__link" href="/information-article-5">Information article 5</a></li>
                    <li className="list__item"><a className="list__link" href="/pebbles-page">Pebble page</a></li>
                    <li className="list__item"><a className="list__link" href="/box-grid">Box Grid page</a></li>
                    <li className="list__item"><a className="list__link" href="/blog-1">Blog page 1</a></li>
                    <li className="list__item"><a className="list__link" href="/blog-2">Blog page 2</a></li>
                    <li className="list__item"><a className="list__link" href="/forms">Forms</a></li>
                    <li className="list__item"><a className="list__link" href="/usage">Usage page</a></li>
                    <li className="list__item"><a className="list__link" href="/modal-dialog">Modal Dialog</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ComponentsPage;