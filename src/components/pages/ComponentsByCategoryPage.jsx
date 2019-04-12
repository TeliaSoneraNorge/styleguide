import _ from 'lodash';
import React from 'react';

import { Header } from 'component-lib';
import ComponentDocs from '../common/ComponentDocs';
import { getComponentsByCategory } from '../../utils/componentUtil';

export default class ComponentsByCategoryPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const allComponents = getComponentsByCategory();
        const { componentCategory } = this.props.match.params;
        const categoryWithComponents = allComponents[componentCategory];

        return (
            <div>
                <Header
                    iconName="ico_code"
                    pageTitle={`Components: ${categoryWithComponents.heading}`}
                    withMask={false}
                    withContentOverlap={false} />
                { categoryWithComponents.components &&
                    <div className="container container--no-padding container--extra-margin-bottom">
                        {_.map(categoryWithComponents.components, (component, key) =>
                            <ComponentDocs key={key} component={component} />
                        )}
                    </div>
                }

            </div>
        );
    }
}
