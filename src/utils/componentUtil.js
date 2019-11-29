import _ from 'lodash';
import componentCategories from '../component-categories';

import { getComponentDocumentation, getComponentCategory } from './staticDataUtil';

function getComponentsByType(type, componentsInFolder) {
  const examples = require('../components/examples/**/*.js');

  return _.reduce(
    componentsInFolder,
    (result, value, componentName) => {
      if (!value[componentName]) {
        return result;
      }

      const component = value[componentName].default;

      result[componentName] = {
        name: componentName,
        type: type,
        component,
        docs: getComponentDocumentation(type, componentName) || '*No documentation found*',
        examples: examples[type][componentName],
      };
      return result;
    },
    {}
  );
}

function getComponentsByPredicate(predicate, allComponents, heading = '', category) {
  const examples = require('../components/examples/**/*.js');

  const componentsInCategory = _.map(allComponents, (components, type) => {
    const filtered = _.filter(components, (_, componentName) => predicate(type, componentName));

    return filtered.map(c =>
      _.map(c, (component, name) => ({
        name,
        type,
        component,
        docs: getComponentDocumentation(type, name) || '*No documentation found*',
        examples: examples[type][name],
      }))
    );
  });

  const flattenedCompontents = _.flattenDeep(componentsInCategory);
  return {
    heading: heading || category,
    components: flattenedCompontents,
  };
}

export function getComponents() {
  return {
    atoms: getComponentsByType('atoms', require('../../component-lib/src/atoms/**/*.jsx')),
    molecules: getComponentsByType('molecules', require('../../component-lib/src/molecules/**/*.jsx')),
    organisms: getComponentsByType('organisms', require('../../component-lib/src/organisms/**/*.jsx')),
  };
}

export function getComponentsByCategory() {
  const allComponents = require('../../component-lib/src/**/**/*.jsx');

  const matchesCategory = (type, componentName, category) =>
    getComponentCategory(type, componentName).toLowerCase() === category.toLowerCase();

  const matchesNoCategory = (type, componentName) =>
    componentCategories.filter(category => matchesCategory(type, componentName, category.key)).length === 0;

  const componentsByCategory = componentCategories.reduce(
    (result, category) => ({
      ...result,
      [category.key]: getComponentsByPredicate(
        (type, componentName) => matchesCategory(type, componentName, category.key),
        allComponents,
        category.name
      ),
    }),
    {}
  );

  const uncategorizedComponents = getComponentsByPredicate(matchesNoCategory, allComponents, 'Without category');

  return {
    ...componentsByCategory,
    misc: uncategorizedComponents,
  };
}

export function isFullWidthComponent(componentName) {
  const fullWidthComponents = [
    // Atoms
    'Container',
    'FullWidthImage',
    'PagePebbles',

    // Molecules
    'Alert',
    'ArticleMetaData',
    'BoxGrid',
    'FactBox',
    'FunkyTabs',
    'Header',
    'HeaderWithImage',
    'Hero',
    'PageHeader',
    'PageFooter',
    'PopUpLine',
    'RecommendedProducts',
    'RelatedArticles',
    'MiniDashboard',
    'Menu',
    'DisplayFunctionality',
    'Cards',
    'Gallery',

    // Organisms
    'FocusSubscription',
    'ThemeBoxes',
    'ThemeBoxesWithImage',
    'ProductListGrid',
    'FeatureBoxes',
    'SubscriptionPriceBoxes',
  ];
  return _.includes(fullWidthComponents, componentName);
}
