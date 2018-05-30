import React from 'react';
import { UserDashboard } from '@telia/styleguide';

const DataUsage = () => (
    <UserDashboard
        name="John Doe"
        usageLink="#"
        dataAmountLeft={7}
        dataAmountLeftText="7 GB"
        totalDataAmount={10}
        totalDataAmountText="10 GB"
        refillInDays="5"
        usageInfoText=" igjen av 10 GB. Påfylles om 5 dager"
        invoiceLink="#"
        unpaidOverdueInvoices="1"
        minsideLink="#"
        buyMoreDataLink="#" />
);

export default DataUsage;