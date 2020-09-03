import React from 'react';
import Container from './Container';

export default {
  title: 'Component library/Atoms/Container',
  // component: Container,
};

export const Default = () => {

  const exampleStyles = {
    backgroundColor: 'rgb(153, 10, 227)',
    color: 'rgb(255, 255, 255)',
    paddingTop: '1rem',
  };
  
  return (
    <>

      <Container size="small" style={exampleStyles}>
        This is some content inside a small block.
      </Container>
      <Container size="medium" style={exampleStyles}>
        This is some content inside a medium block.
      </Container>
      <Container size="large" style={exampleStyles}>
        This is some content inside a large block.
      </Container>

    </>
  )
};