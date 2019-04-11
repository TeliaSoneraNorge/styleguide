import React from 'react';
import { BoxGrid, Box, Container } from 'component-lib';

const DefaultBoxGrid = () => (
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

export default DefaultBoxGrid;