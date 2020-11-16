import React from 'react';
import SummaryTable from './SummaryTable';

export default {
  title: 'Component library/Atoms/SummaryTable',
  component: SummaryTable,
};

const items = [
  { label: '6 GB', price: 249, value: '249,-' },
  { label: '6 GB', price: 249, value: '249,-' },
  { label: '6 GB', price: 249, value: '249,-' },
  { label: 'Telia X', price: 549, value: '549,-' },
  { label: 'BARN 200 MB', price: 99, value: '99,-' },
  { label: 'BARN 200 MB', price: 99, value: '99,-' },
  { isBold: true, isSuccess: true, label: 'Rabatt', value: `-XXX,-` },
  { isBold: true, isStriketrough: true, label: 'Ordinærpris', value: '1395,-' },
  { isBold: true, label: 'Din månedspris', value: '1395,-' },
];

export const Default = () => {
  return <SummaryTable items={items} />;
};
