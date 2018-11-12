import React from 'react';
import { FunkyTabs, Heading } from '@telia/styleguide';

export default class DefaultFunkyTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            funkyTabSelectedIndex: 2
        };
    }
    onFunkyTabSelect(e, index) {
        e.preventDefault();
        this.setState({ funkyTabSelectedIndex: index });
    }
    render() {
        return (
            <FunkyTabs
                uniqueId="default-funky-tabs"
                onSelect={(e, index) => this.onFunkyTabSelect(e, index)}
                selectedIndex={this.state.funkyTabSelectedIndex}>
                <FunkyTabs.TabPanel heading="Under 15 år" imagePath="/public/images/under15.png" url="/tabs/under-15">
                    <section className="container container--small rich-text">
                        <Heading level={2} text="Funky tab 1" />
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </FunkyTabs.TabPanel>
                <FunkyTabs.TabPanel heading="Under 28 år" imagePath="/public/images/under28.png" url="/tabs/under-28">
                    <section className="container container--small rich-text">
                        <Heading level={2} text="Funky tab 2" />
                        <p className="paragraph">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </FunkyTabs.TabPanel>
                <FunkyTabs.TabPanel heading="For alle" imagePath="/public/images/for-alle.png" url="/tabs/for-alle">
                    <section className="container container--small rich-text">
                        <Heading level={2} text="Funky tab 3" />
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </FunkyTabs.TabPanel>
                <FunkyTabs.TabPanel heading="Kontantkort" imagePath="/public/images/kontantkort.png" url="/tabs/kontantkort">
                    <section className="container container--small rich-text">
                        <Heading level={2} text="Funky tab 4" />
                        <p className="paragraph">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </FunkyTabs.TabPanel>
            </FunkyTabs>
        );
    }
}