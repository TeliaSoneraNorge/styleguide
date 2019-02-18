import React from 'react';
import { ColumnBox } from '@telia/styleguide';
import { Container } from '@telia/styleguide';

const DefaultColumnBox = () => (
    <Container withFlex>
        <ColumnBox>
            This is a ColumnBox component that is meant to be used with a parent box utilizing flex in order to separate into two columns.
        </ColumnBox>
        <ColumnBox>
            This is an example of the functionality and how they work inside a container component.
        </ColumnBox>
    </Container>
);

export default DefaultColumnBox;