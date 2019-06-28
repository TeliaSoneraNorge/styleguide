import React, { Fragment } from 'react';
import { Container } from '@telia/styleguide';

const exampleStyles = {
  backgroundColor: 'rgb(153, 10, 227)',
  color: 'rgb(255, 255, 255)',
  paddingTop: '1rem',
};

const DefaultContainer = () => (
  <Fragment>
    <Container size="small" style={exampleStyles}>
      This is some content inside a small block.
    </Container>
    <Container size="medium" style={exampleStyles}>
      This is some content inside a medium block.
    </Container>
    <Container size="large" style={exampleStyles}>
      This is some content inside a large block.
    </Container>
  </Fragment>
);

export default DefaultContainer;
