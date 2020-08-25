import React from 'react';
import { BoxGrid, Box, StatefulBox, Container } from '../../index';

export default {
  title: 'Component library/Molecules/BoxGrid',
  component: BoxGrid,
};

export const Default= () => (
  <Container size="medium" noMargin>
    <BoxGrid>
      <Box color="teal" id="box-1" canExpand isExpanded>
        <p>Box 1 - Expanded</p>
      </Box>
      <Box color="light-orange" id="box-2" canExpand>
        <p>Box 2</p>
      </Box>
      <Box color="pink" id="box-3" canExpand>
        <p>Box 3</p>
      </Box>
      <Box color="blue" id="box-4" canExpand>
        <p>Box 4</p>
      </Box>
      <Box color="green" id="box-5" canExpand>
        <p>Box 5</p>
      </Box>
      <Box color="teal" id="box-6" canExpand>
        <p>Box 6</p>
      </Box>
      <Box color="pink" id="box-7" canExpand>
        <p>Box 7</p>
      </Box>
      <Box color="blue" id="box-8" canExpand isExpanded>
        <p>Box 8 - Expanded</p>
      </Box>
    </BoxGrid>
  </Container>
);

export const SmallAndMediumBoxes = () => (
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

export const WithStatefulBoxes = () => (
  <Container size="medium" noMargin noPadding>
    <BoxGrid>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="teal" id="box-1" size="small" canExpand isExpanded>
        <p>Box 1 - Small - Expanded</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="light-orange" id="box-2" size="small" canExpand>
        <p>Box 2 - Small</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="pink" id="box-3" size="small" canExpand>
        <p>Box 3 - Small</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="blue" id="box-4" size="small" canExpand>
        <p>Box 4 - Small</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="green" id="box-5" size="small" canExpand>
        <p>Box 5 - Small</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="teal" id="box-6" size="medium" canExpand>
        <p>Box 6 - Medium</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="pink" id="box-7" size="medium" canExpand>
        <p>Box 7 - Medium</p>
      </StatefulBox>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <StatefulBox color="blue" id="box-8" size="medium" canExpand isExpanded>
        <p>Box 8 - Medium - Expanded</p>
      </StatefulBox>
    </BoxGrid>
  </Container>
);
