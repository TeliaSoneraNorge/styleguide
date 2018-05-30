import React from 'react';
import { UserDashboard } from '@telia/styleguide';

const Prepaid = () => (
    <UserDashboard
        name="John Doe"
        usageLink="#"
        dataAmountLeftText="143 kr"
        usageInfoText=" igjen på kontantkort"
        invoiceLink="#"
        minsideLink="#"
        isPrepaid />
);

export default Prepaid;