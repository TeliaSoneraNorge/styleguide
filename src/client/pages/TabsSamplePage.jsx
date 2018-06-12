import React from 'react';
import classNames from 'classnames';

import { Heading, FunkyTabs, Tabs } from '../../../component-lib/src/index';

export default class TabsSamplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            funkyTabSelectedIndex: 2,
            otherTabSelectedIndex: 1,
            pricesTabSelectedIndex: 1
        };
    }
    onFunkyTabSelect(e, index) {
        e.preventDefault();
        this.setState({ funkyTabSelectedIndex: index });
    }
    render() {
        return (
            <div>
                <div className="center-align">
                    <h1 className="heading heading--level-1">Tabs</h1>
                </div>

                <FunkyTabs
                    onSelect={(e, index) => this.onFunkyTabSelect(e, index)}
                    selectedIndex={this.state.funkyTabSelectedIndex}>
                    <FunkyTabs.TabElement heading="Under 15 år" imagePath="/public/images/under15.png" url="/tabs/under-15">
                        <section className="container container--small">
                            <Heading level={2} text="Funky tab 1" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>
                    </FunkyTabs.TabElement>
                    <FunkyTabs.TabElement heading="Under 28 år" imagePath="/public/images/under28.png" url="/tabs/under-28">
                        <section className="container container--small">
                            <Heading level={2} text="Funky tab 2" />
                            <p className="paragraph">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>
                    </FunkyTabs.TabElement>
                    <FunkyTabs.TabElement heading="For alle" imagePath="/public/images/for-alle.png" url="/tabs/for-alle">
                        <section className="container container--small">
                            <Heading level={2} text="Funky tab 3" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>
                    </FunkyTabs.TabElement>
                    <FunkyTabs.TabElement heading="Kontantkort" imagePath="/public/images/kontantkort.png" url="/tabs/kontantkort">
                        <section className="container container--small">
                            <Heading level={2} text="Funky tab 4" />
                            <p className="paragraph">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>
                    </FunkyTabs.TabElement>
                </FunkyTabs>

                <section className="container container--small">
                    <Heading level={2} text="Other types of tabs" />
                    <p className="paragraph">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </section>

                <section className="container container--small">
                    <Tabs
                        uniqueId="regular-tabs"
                        onSelect={(index) => this.setState({ otherTabSelectedIndex: index })}
                        selectedIndex={this.state.otherTabSelectedIndex}>
                        <Tabs.TabElement heading="Test 1">
                            <Heading level={3} text="Regular tab 1" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Tabs.TabElement>
                        <Tabs.TabElement heading="Test 2">
                            <Heading level={3} text="Regular tab 2" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Tabs.TabElement>
                        <Tabs.TabElement heading="Test 3">
                            <Heading level={3} text="Regular tab 3" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Tabs.TabElement>
                        <Tabs.TabElement heading="Test 4">
                            <Heading level={3} text="Regular tab 4" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Tabs.TabElement>
                    </Tabs>
                </section>

                <section className="container container--small">
                    <Tabs
                        uniqueId="prices-tabs"
                        onSelect={(index) => this.setState({ pricesTabSelectedIndex: index })}
                        selectedIndex={this.state.pricesTabSelectedIndex}>
                        <Tabs.TabElement heading="Priser i Bosnia-Hercegovina">
                            <Heading level={3} text="Priser i Bosnia-Hercegovina" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Tabs.TabElement>
                        <Tabs.TabElement heading="Priser fra Norge til Bosnia-Hercegovina">
                            <Heading level={3} text="Regular tab 2" />
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Tabs.TabElement>
                    </Tabs>
                </section>

                
            </div>
        );
    }
}