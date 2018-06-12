import React from 'react';
import { Heading, Tabs } from '@telia/styleguide';

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
        return (
            <Tabs
                uniqueId="default-tabs"
                onSelect={this.onSelect}
                selectedIndex={this.state.selectedIndex}>
                <Tabs.TabElement heading="Test 1">
                    <Heading level={2} text="Tab 1" />
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Tabs.TabElement>
                <Tabs.TabElement heading="Test 2">
                    <Heading level={2} text="Tab 2" />
                    <p className="paragraph">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Tabs.TabElement>
                <Tabs.TabElement heading="Test 3">
                    <Heading level={2} text="Tab 3" />
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Tabs.TabElement>
                <Tabs.TabElement heading="Test 4">
                    <Heading level={2} text="Tab 4" />
                    <p className="paragraph">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Tabs.TabElement>
            </Tabs>
        );
    }
}

export default TabsExample;