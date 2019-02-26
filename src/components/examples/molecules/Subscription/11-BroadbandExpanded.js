import React from 'react';
import { Subscription } from '@telia/styleguide';

const productList = [
    { title: 'Abonnement', price: '699,-', subtitle: 'Per mnd' },
    { title: 'Ruter', price: '499,-' },
];

const totalCalculation = { title: 'Minste totalpris', price: '8887,-', subtitle: 'med 12 mnd avtale' };

const BroadbandExpanded = () => (
    <Subscription
        id="broadband-subscription-expanded"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="blue"
        size="small"
        isExpanded
        speechBubbleText="Some campaign text"
        isBroadband
        productList={productList}
        totalCalculation={totalCalculation} />
);

export default BroadbandExpanded;