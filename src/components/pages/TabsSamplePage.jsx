import React from 'react';

import { Heading, FunkyTabs, Tabs } from '../../../component-lib/src/index';

export default class TabsSamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      funkyTabSelectedIndex: 2,
      otherTabSelectedIndex: 1,
      pricesTabSelectedIndex: 1,
      separatedTabSelectedIndex: 0,
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
          selectedIndex={this.state.funkyTabSelectedIndex}
        >
          <FunkyTabs.TabPanel
            heading="Under 15 år"
            imagePath={require('../../assets/images/under15.png')}
            url="/tabs/under-15"
          >
            <section className="container container--small rich-text">
              <Heading level={2} text="Funky tab 1" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </section>
          </FunkyTabs.TabPanel>
          <FunkyTabs.TabPanel
            heading="Under 28 år"
            imagePath={require('../../assets/images/under28.png')}
            url="/tabs/under-28"
          >
            <section className="container container--small rich-text">
              <Heading level={2} text="Funky tab 2" />
              <p className="paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </p>
            </section>
          </FunkyTabs.TabPanel>
          <FunkyTabs.TabPanel
            heading="For alle"
            imagePath={require('../../assets/images/for-alle.png')}
            url="/tabs/for-alle"
          >
            <section className="container container--small rich-text">
              <Heading level={2} text="Funky tab 3" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </section>
          </FunkyTabs.TabPanel>
          <FunkyTabs.TabPanel
            heading="Kontantkort"
            imagePath={require('../../assets/images/kontantkort.png')}
            url="/tabs/kontantkort"
          >
            <section className="container container--small rich-text">
              <Heading level={2} text="Funky tab 4" />
              <p className="paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
              </p>
            </section>
          </FunkyTabs.TabPanel>
        </FunkyTabs>

        <section className="container container--small rich-text">
          <Heading level={2} text="Other types of tabs" />
          <p className="paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section className="container container--small">
          <Tabs
            uniqueId="regular-tabs"
            onSelect={index => this.setState({ otherTabSelectedIndex: index })}
            selectedIndex={this.state.otherTabSelectedIndex}
          >
            <Tabs.TabPanel heading="Test 1">
              <Heading level={3} text="Regular tab 1" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Tabs.TabPanel>
            <Tabs.TabPanel heading="Test 2">
              <Heading level={3} text="Regular tab 2" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Tabs.TabPanel>
            <Tabs.TabPanel heading="Test 3">
              <Heading level={3} text="Regular tab 3" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Tabs.TabPanel>
            <Tabs.TabPanel heading="Test 4">
              <Heading level={3} text="Regular tab 4" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Tabs.TabPanel>
          </Tabs>
        </section>

        <section className="container container--small">
          <Tabs
            uniqueId="prices-tabs"
            onSelect={index => this.setState({ pricesTabSelectedIndex: index })}
            selectedIndex={this.state.pricesTabSelectedIndex}
          >
            <Tabs.TabPanel heading="Priser i Bosnia-Hercegovina">
              <Heading level={3} text="Priser i Bosnia-Hercegovina" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Tabs.TabPanel>
            <Tabs.TabPanel heading="Priser fra Norge til Bosnia-Hercegovina">
              <Heading level={3} text="Regular tab 2" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Tabs.TabPanel>
          </Tabs>
        </section>

        <section className="container container--small">
          <Tabs
            uniqueId="separated-tabs"
            onSelect={index => this.setState({ separatedTabSelectedIndex: index })}
            selectedIndex={this.state.separatedTabSelectedIndex}
            skipPanelRendering={true}
          >
            <Tabs.Tab heading="Foo" />
            <Tabs.Tab heading="Bar" />
          </Tabs>

          <p>Some other stuff here</p>

          <Tabs.TabPanel
            index={0}
            heading="Foo"
            uniqueId="separated-tabs"
            isSelected={this.state.separatedTabSelectedIndex === 0}
          >
            <Heading level={3} text="Foo" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel
            index={1}
            heading="Bar"
            uniqueId="separated-tabs"
            isSelected={this.state.separatedTabSelectedIndex === 1}
          >
            <Heading level={3} text="Bar" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
        </section>
      </div>
    );
  }
}
