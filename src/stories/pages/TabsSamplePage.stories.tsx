import React, { useState } from 'react';

import { Heading, FunkyTabs, Tabs } from '../../index';

import img from '../sampleImages';

export default {
  title: 'Examples/Pages',
};

export function TabsSamplePage() {
  const [funkyTabSelectedIndex, setFunkyTabSelectedIndex] = useState(2);
  const [otherTabSelectedIndex, setOtherTabSelectedIndex] = useState(1);
  const [pricesTabSelectedIndex, setPricesTabSelectedIndex] = useState(1);
  const [separatedTabSelectedIndex, setSeparatedTabSelectedIndex] = useState(0);

  function onFunkyTabSelect(e: any, index: any) {
    e.preventDefault();
    setFunkyTabSelectedIndex(index);
  }

  return (
    <div>
      <div className="center-align">
        <h1 className="heading heading--level-1">Tabs</h1>
      </div>

      <FunkyTabs onSelect={(e, index) => onFunkyTabSelect(e, index)} selectedIndex={funkyTabSelectedIndex}>
        <FunkyTabs.TabPanel heading="Under 15 år" imagePath={img.under15} url="/tabs/under-15">
          <section className="container container--small rich-text">
            <Heading level={2} text="Funky tab 1" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>
        </FunkyTabs.TabPanel>
        <FunkyTabs.TabPanel heading="Under 28 år" imagePath={img.under28} url="/tabs/under-28">
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
        <FunkyTabs.TabPanel heading="For alle" imagePath={img.forAlle} url="/tabs/for-alle">
          <section className="container container--small rich-text">
            <Heading level={2} text="Funky tab 3" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>
        </FunkyTabs.TabPanel>
        <FunkyTabs.TabPanel heading="Kontantkort" imagePath={img.kontantkort} url="/tabs/kontantkort">
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
          onSelect={index => setOtherTabSelectedIndex(index)}
          selectedIndex={otherTabSelectedIndex}
        >
          <Tabs.TabPanel>
            <Heading level={3} text="Regular tab 1" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Heading level={3} text="Regular tab 2" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Heading level={3} text="Regular tab 3" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
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
          onSelect={index => setPricesTabSelectedIndex(index)}
          selectedIndex={pricesTabSelectedIndex}
        >
          <Tabs.TabPanel>
            <Heading level={3} text="Priser i Bosnia-Hercegovina" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
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
          onSelect={index => setSeparatedTabSelectedIndex(index)}
          selectedIndex={separatedTabSelectedIndex}
          skipPanelRendering={true}
        >
          <Tabs.Tab heading="Foo" />
          <Tabs.Tab heading="Bar" />
        </Tabs>

        <p>Some other stuff here</p>

        <Tabs.TabPanel index={0} uniqueId="separated-tabs" isSelected={separatedTabSelectedIndex === 0}>
          <Heading level={3} text="Foo" />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Tabs.TabPanel>
        <Tabs.TabPanel index={1} uniqueId="separated-tabs" isSelected={separatedTabSelectedIndex === 1}>
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
