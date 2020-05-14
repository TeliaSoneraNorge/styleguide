import React, { useState } from 'react';
import { FunkyTabs, Heading, colors } from '../../index';
import img from '../../stories/sampleImages'

export default {
  title: 'Component library|Molecules/FunkyTabs',
  component: FunkyTabs,
};

export const  DefaultFunkyTabs = () => {
  const [funkyTabSelectedIndex, setFunkyTabSelectedIndex] = useState(2)

  const onFunkyTabSelect = (e: React.BaseSyntheticEvent, index: number) => {
    e.preventDefault();

    setFunkyTabSelectedIndex(index)
  }

  return (
    <FunkyTabs
      uniqueId="default-funky-tabs"
      onSelect={(e, index) => onFunkyTabSelect(e, index)}
      selectedIndex={funkyTabSelectedIndex}
    >
      <FunkyTabs.TabPanel heading="Under 15 år" imagePath={img.under15} url="/tabs/under-15">
        <section className="container container--small rich-text">
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 1
          </Heading>
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
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 2
          </Heading>
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
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 3
          </Heading>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </section>
      </FunkyTabs.TabPanel>
      <FunkyTabs.TabPanel
        heading="Kontantkort"
        imagePath={img.kontantkort}
        url="/tabs/kontantkort"
      >
        <section className="container container--small rich-text">
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 4
          </Heading>
          <p className="paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
          </p>
        </section>
      </FunkyTabs.TabPanel>
    </FunkyTabs>
  );

}
export const NoImageFunkyTabs = () => {
  const [funkyTabSelectedIndex, setFunkyTabSelectedIndex] = useState(2)

  const onFunkyTabSelect = (e: React.BaseSyntheticEvent, index: number) => {
    e.preventDefault();

    setFunkyTabSelectedIndex(index)
  }

  return (
    <FunkyTabs
      uniqueId="default-funky-tabs"
      onSelect={(e, index) => onFunkyTabSelect(e, index)}
      selectedIndex={funkyTabSelectedIndex}
    >
      <FunkyTabs.TabPanel heading="Under 15 år" url="/tabs/under-15">
        <section className="container container--small rich-text">
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 1
          </Heading>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </section>
      </FunkyTabs.TabPanel>
      <FunkyTabs.TabPanel heading="Under 28 år" url="/tabs/under-28">
        <section className="container container--small rich-text">
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 2
          </Heading>
          <p className="paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
          </p>
        </section>
      </FunkyTabs.TabPanel>
      <FunkyTabs.TabPanel heading="For alle" url="/tabs/for-alle">
        <section className="container container--small rich-text">
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 3
          </Heading>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </section>
      </FunkyTabs.TabPanel>
      <FunkyTabs.TabPanel heading="Kontantkort" url="/tabs/kontantkort" >
        <section className="container container--small rich-text">
          <Heading tag="h2" size="s" style={{ color: colors.black, marginTop: 0 }} >
            Funky tab 4
          </Heading>
          <p className="paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
          </p>
        </section>
      </FunkyTabs.TabPanel>
    </FunkyTabs>
  );
}
