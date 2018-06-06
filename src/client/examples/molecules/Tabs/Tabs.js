import React from 'react';
import { Tabs, TabElement } from '@telia/styleguide';

class TabsExample extends React.Component {

    constructor() {
        super();

        this.state = { selectedIndex: 0 };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(selectedIndex) {
        this.setState({ selectedIndex });
    }

    render() {
        return <Tabs onSelect={this.onSelect} selectedIndex={this.state.selectedIndex}>
            <TabElement heading="Test 1">
                Content 1
            </TabElement>
            <TabElement heading="Test 2">
                Content 2
            </TabElement>
            <TabElement heading="Test 3">
                Content 3
            </TabElement>
            <TabElement heading="Test 4">
                Content 4
            </TabElement>
        </Tabs>;
    }
}

export default TabsExample;