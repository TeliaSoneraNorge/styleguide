import React from 'react';
import { BoxGrid, StatefulBox, Container } from '@telia/styleguide';

const WithStatefulBoxes = () => (
  <Container size="medium" noMargin noPadding>
    <BoxGrid>
      <StatefulBox color="teal" id="box-1" size="small" canExpand isExpanded>
        <p>Box 1 - Small - Expanded</p>
      </StatefulBox>
      <StatefulBox color="light-orange" id="box-2" size="small" canExpand>
        <p>Box 2 - Small</p>
      </StatefulBox>
      <StatefulBox color="pink" id="box-3" size="small" canExpand>
        <p>Box 3 - Small</p>
      </StatefulBox>
      <StatefulBox color="blue" id="box-4" size="small" canExpand>
        <p>Box 4 - Small</p>
      </StatefulBox>
      <StatefulBox color="green" id="box-5" size="small" canExpand>
        <p>Box 5 - Small</p>
      </StatefulBox>
      <StatefulBox color="teal" id="box-6" size="medium" canExpand>
        <p>Box 6 - Medium</p>
      </StatefulBox>
      <StatefulBox color="pink" id="box-7" size="medium" canExpand>
        <p>Box 7 - Medium</p>
      </StatefulBox>
      <StatefulBox color="blue" id="box-8" size="medium" canExpand isExpanded>
        <p>Box 8 - Medium - Expanded</p>
      </StatefulBox>
    </BoxGrid>
  </Container>
);

export default WithStatefulBoxes;
