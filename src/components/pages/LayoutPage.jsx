import React from 'react';

import { Heading, Header, FocusBox } from '../../../component-lib/src/index';

const containerStyles = {
  backgroundColor: '#990AE3',
  color: '#FFFFFF',
  paddingTop: '1rem',
};

const LayoutPage = () => (
  <div>
    <Header iconName="ico_code-2" pageTitle="Page Layout & Grid">
      <p className="paragraph">You will notice that this is at the top of the page and is full-width.</p>
    </Header>

    <div className="container container--no-padding container--extra-margin-bottom">
      <div className="container container--small container--no-margin">
        <Heading level={2} text="No grid system!" />
        <p className="paragraph">
          Since we are using BEM for our CSS naming-conventions, the only class names we see in the HTML should be our
          BEM component classes. We do not wish to clutter up the HTML markup with grid class names.
        </p>
        <p className="paragraph">
          However, there are a set of CSS variables which can be used to achieve a fluid grid layout. Each component
          should use these variables for its width, margins and in its media queries to achieve a responsive layout.
        </p>
      </div>

      <div className="container container--small container--no-margin">
        <Heading level={2} text="Container widths" />
        <p className="paragraph">
          There are three main container widths: small, medium and large. Body text, such as this one, should be in a
          small container to reduce line width and make reading easier.
        </p>
      </div>

      <div className="container container--small" style={containerStyles}>
        This is some content inside a className="container container--small" block.
      </div>

      <div className="container container--medium" style={containerStyles}>
        This is some content inside a className="container container--medium" block.
      </div>

      <div className="container container--large" style={containerStyles}>
        This is some content inside a className="container container--large" block.
      </div>

      <FocusBox>
        <p className="paragraph">
          Sometimes there will be a block like this one, which is <em>medium-width</em>, but its content will still be{' '}
          <em>small-width</em>.
        </p>
      </FocusBox>
    </div>
  </div>
);

export default LayoutPage;
