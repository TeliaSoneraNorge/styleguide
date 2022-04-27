import React from 'react';
import SummaryTable from './SummaryTable';

export default {
  title: 'Component library/Atoms/SummaryTable',
  component: SummaryTable,
};

const items = [
  { label: '6 GB', price: 399, value: '399,-' },
  { label: '6 GB m/rabatt', price: 249, value: '249,-' },
  { label: '6 GB  m/rabatt', price: 249, value: '249,-' },
  { isBold: true, isSuccess: true, label: 'Rabatt', value: `-XXX,-` },
  { isBold: true, isStriketrough: true, label: 'Ordinærpris', value: '1395,-' },
  { isBold: true, label: 'Din månedspris', value: '1395,-' },
];

const itemsCompact = [
  { label: '6 GB', price: 399, value: '399,-' },
  { label: '6 GB m/rabatt', price: 249, value: '249,-' },
  { label: '6 GB  m/rabatt', price: 249, value: '249,-' },
  { isBold: true, label: 'Totalt pr.md. med familierabatt og årsavtale', valueStriketrough: '1500,-', value: '1395,-' },
];

export const Default = () => {
  return <SummaryTable items={items} />;
};

export const Compact = () => {
  return <SummaryTable kind="compact" items={itemsCompact} />;
};
