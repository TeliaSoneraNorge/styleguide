import _ from 'lodash';
import React from 'react';

import { Header } from '@telia/styleguide';
import ComponentDocs from '../common/ComponentDocs';
import { getComponents } from '../../utils/componentUtil';

export default class ComponentsByTypePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const allComponents = getComponents();
    const { componentType } = this.props.match.params;
    const componentsOfType = allComponents[componentType];

    return (
      <div>
        <Header
          iconName="ico_code"
          pageTitle={`Components: ${componentType}`}
          withMask={false}
          withContentOverlap={false}
        />
        <div className="container container--no-padding container--extra-margin-bottom">
          {_.map(componentsOfType, (component, key) => (
            <ComponentDocs key={key} component={component} />
          ))}
        </div>
      </div>
    );
  }
}
