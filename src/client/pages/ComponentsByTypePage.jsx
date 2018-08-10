import React, { Component } from 'react';
import _ from 'lodash';

import { Header } from '../../../component-lib/src/index';
import ComponentDocs from '../components/ComponentDocs';
import { getComponents } from '../utils/componentUtil';

class ComponentsByTypePage extends Component {
    state = {
        componentsByType: _.groupBy(getComponents(), 'type')
    };

    render() {
        const { componentType } = this.props.match.params;
        const components = this.state.componentsByType[componentType];
        return (
            <div>
                <Header
                    iconName="ico_code"
                    pageTitle={`Components: ${componentType}`}
                    withMask={false}
                    withContentOverlap={false} />
                <div className="container container--no-padding container--extra-margin-bottom">
                    {components.map(it => (
                        <ComponentDocs id={it.name} component={it} key={it.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ComponentsByTypePage;
