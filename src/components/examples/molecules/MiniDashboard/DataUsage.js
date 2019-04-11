import React from 'react';
import { MiniDashboard } from 'component-lib';

const MiniDashboardDataUsage = () => (
    <MiniDashboard
        headingText="Joe Bloggs"
        links={[
            { text: 'Faktura', href: '#', notifications: 1 },
            { text: 'Mer fra Min Side', href: '#' },
            { text: 'Kjøp mer data', href: '#' }
        ]}>
        <MiniDashboard.StatWithLabelWidget
            statisticText="7 GB"
            statisticLabel=" igjen av 10 GB. Påfylles om 5 dager"
            statisticHref="/min-side"
            progressBarRemaining={7}
            progressBarTotal={10} />
    </MiniDashboard>
);

export default MiniDashboardDataUsage;