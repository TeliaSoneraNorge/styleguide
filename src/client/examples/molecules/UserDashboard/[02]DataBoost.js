import React from 'react';
import { UserDashboard } from '@telia/styleguide';

const DataBoost = () => (
    <UserDashboard
        name="John Doe"
        usageLink="#"
        dataAmountLeftText="02:58:32"
        totalDataAmountText="UNLIMITED"
        usageInfoText=" igjen av Data Boost"
        invoiceLink="#"
        unpaidOverdueInvoices="1"
        minsideLink="#"
        isDataBoost />
);

export default DataBoost;