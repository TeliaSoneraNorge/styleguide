import React from 'react';
import { Banner, Container } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/Banner',
  component: Banner,
};

export const Default = () => (
  <Container size="large" className="banner--background-grey">
    <Banner img={img.screenshot1} imgAlt="Man and woman looking at tablet">
      <h2 className="heading-2">– Vi står ikke bare og prater om digitalisering</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Banner>
  </Container>
);

export const BannerReversed = () => (
  <Container size="large" className="banner--background-grey">
    <Banner
      img={img.screenshot1}
      imgAlt="Man and woman looking at tablet"
      reverse={true}
    >
      <h2 className="heading-2">– Vi står ikke bare og prater om digitalisering</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Banner>
  </Container>
);

export const BannerGrey = () => (
  <Container size="large">
    <Banner img={img.screenshot1} imgAlt="Man and woman looking at tablet" grey={true}>
      <h2 className="heading-2">– Vi står ikke bare og prater om digitalisering</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Banner>
  </Container>
);
