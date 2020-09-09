import React from 'react';
import InfoCard from './InfoCard';

export default {
  title: 'Component library/Molecules/InfoCard',
  component: InfoCard,
};

const usps = [
    "Skjermforsikring inkludert",
    "Betal en fast månedspris i 24 md.",
    "Bytt telefon hvis du vil etter 12 md.",
    "Abonnement uten binding kommer i tillegg"
];

export const Default = () => (
  <InfoCard title="Hva er SVITSJ" usps={usps} />
);