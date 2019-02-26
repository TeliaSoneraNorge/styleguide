import React from 'react';
import { MiniDashboard } from '@telia/styleguide';

const MiniDashboardDataBoost = () => (
    <MiniDashboard
        headingText="John Doe"
        links={[
            { text: 'Faktura', href: '#', notifications: 1 },
            { text: 'Mer fra Min Side', href: '#' }
        ]}>
        <MiniDashboard.StatWithLabelWidget
            statisticText="02:58:32"
            statisticLabel=" igjen av Data Boost"
            statisticHref="/min-side" />
    </MiniDashboard>
);

export default MiniDashboardDataBoost;