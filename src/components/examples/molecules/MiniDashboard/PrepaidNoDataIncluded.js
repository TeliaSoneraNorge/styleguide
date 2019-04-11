import React from 'react';
import { MiniDashboard } from 'component-lib';

const MiniDashboardPrepaid = () => (
    <MiniDashboard
        headingText="Ola Nordmann"
        links={[
            { text: 'Faktura', href: '#', notifications: 1 },
            { text: 'Mer fra Min Side', href: '#' }
        ]}>
        <MiniDashboard.StatWithLabelWidget
            statisticText="143 kr"
            statisticLabel=" igjen på kontantkort"
            statisticHref="/min-side" />
    </MiniDashboard>
);

export default MiniDashboardPrepaid;