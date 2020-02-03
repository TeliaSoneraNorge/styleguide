import React from 'react';
import LinkTable from './LinkTable';
import Container from '../../atoms/Container';

export default {
    title: 'Component library|Molecules/Link table',
    component: LinkTable,
};

export const EightItems = () => (
    <Container>
        <LinkTable>
            <LinkTable.Item href="#" icon="ico_share" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_mobile" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_mobile_o" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_quote" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_refill" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="twitter_icon" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="silent_icon" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_heart" text="Lorem ipsum" />
        </LinkTable>
    </Container>
);

export const WrapByTwoItems = () => (
    <Container size="medium">
        <LinkTable wrapByTwo={true}>
            <LinkTable.Item href="#" icon="ico_share" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_mobile" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_mobile_o" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="ico_quote" text="Lorem ipsum" />
        </LinkTable>
    </Container>
);