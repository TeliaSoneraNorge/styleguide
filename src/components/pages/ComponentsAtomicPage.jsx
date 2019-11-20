import _ from 'lodash';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { Header } from '@telia/styleguide';
import { getComponents } from '../../utils/componentUtil';

const ComponentList = ({ type, components }) => {
  return (
    <ul className="list list--links">
      {_.map(components, component => (
        <li className="list__item" key={component.name}>
          <Link className="list__link" to={`/components-atomic/${type}#${component.name}`}>
            {component.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ComponentsAtomicPage = () => {
  const allComponents = getComponents();

  return (
    <div>
      <Header iconName="ico_code-2" pageTitle="Components" withMask={false} withContentOverlap={false}>
        <div>
          Here are the{' '}
          <Link className="link" to="http://bradfrost.com/blog/post/atomic-web-design/">
            Atomic Design
          </Link>{' '}
          components, split by category.
        </div>
      </Header>
      <div className="container container--small container--extra-margin-bottom">
        <h2 className="heading heading--level-2">
          <Link className="link" to="/components-atomic/atoms">
            Atoms
          </Link>
        </h2>
        <ComponentList type="atoms" components={allComponents['atoms']} />

        <h2 className="heading heading--level-2">
          <Link className="link" to="/components-atomic/molecules">
            Molecules
          </Link>
        </h2>
        <ComponentList type="molecules" components={allComponents['molecules']} />

        <h2 className="heading heading--level-2">
          <Link className="link" to="/components-atomic/organisms">
            Organisms
          </Link>
        </h2>
        <ComponentList type="organisms" components={allComponents['organisms']} />

        <h2 className="heading heading--level-2">Pages</h2>
        <ul className="list list--links">
          <li className="list__item">
            <Link className="list__link" to="/subscriptions">
              Subscription list page
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/tabs">
              Tabs
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/information-article-1">
              Information article 1
            </Link>{' '}
            - basic components
          </li>
          <li className="list__item">
            <Link className="list__link" to="/information-article-2">
              Information article 2
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/information-article-3">
              Information article 3
            </Link>{' '}
            - with StepByStep
          </li>
          <li className="list__item">
            <Link className="list__link" to="/information-article-4">
              Information article 4
            </Link>{' '}
            - with table
          </li>
          <li className="list__item">
            <Link className="list__link" to="/information-article-5">
              Information article 5
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/pebbles-page">
              Pebble page
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/box-grid">
              Box Grid page
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/blog-1">
              Blog page 1
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/blog-2">
              Blog page 2
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/forms">
              Forms
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/usage">
              Usage page
            </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/modal-dialog">
              Modal Dialog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentsAtomicPage;
