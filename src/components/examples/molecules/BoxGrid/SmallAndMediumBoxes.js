import React from 'react';
import { BoxGrid, Box, Container } from '@telia/styleguide';

const SmallAndMediumBoxes = () => (
  <Container size="medium" noMargin noPadding>
    <BoxGrid>
      <Box color="teal" id="box-1" size="small" canExpand isExpanded>
        <p>Box 1 - Small - Expanded</p>
      </Box>
      <Box color="light-orange" id="box-2" size="small" canExpand>
        <p>Box 2 - Small</p>
      </Box>
      <Box color="pink" id="box-3" size="small" canExpand>
        <p>Box 3 - Small</p>
      </Box>
      <Box color="blue" id="box-4" size="small" canExpand>
        <p>Box 4 - Small</p>
      </Box>
      <Box color="green" id="box-5" size="small" canExpand>
        <p>Box 5 - Small</p>
      </Box>
      <Box color="teal" id="box-6" size="medium" canExpand>
        <p>Box 6 - Medium</p>
      </Box>
      <Box color="pink" id="box-7" size="medium" canExpand>
        <p>Box 7 - Medium</p>
      </Box>
      <Box color="blue" id="box-8" size="medium" canExpand isExpanded>
        <p>Box 8 - Medium - Expanded</p>
      </Box>
    </BoxGrid>
  </Container>
);

export default SmallAndMediumBoxes;
