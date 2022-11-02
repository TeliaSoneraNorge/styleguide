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

const itemsWithDescriptions = [
  { label: '6 GB', price: 399, value: '399,-', description: 'Hello world 1' },
  { label: '6 GB m/rabatt', price: 249, value: '249,-' },
  { label: '6 GB  m/rabatt', price: 249, value: '249,-', description: 'Hello world 2' },
  { isBold: true, isSuccess: true, label: 'Rabatt', value: `-XXX,-`, description: 'Hello world 3' },
  { isBold: true, isStriketrough: true, label: 'Ordinærpris', value: '1395,-', description: 'Hello world 4' },
  { isBold: true, label: 'Din månedspris', value: '1395,-', description: 'Hello world 5' },
];

const itemsCompact = [
  { label: '6 GB', price: 399, value: '399,-' },
  { label: '6 GB m/rabatt', price: 249, value: '249,-' },
  { label: '6 GB  m/rabatt', price: 249, value: '249,-' },
  { isBold: true, label: 'Totalt pr.md. med familierabatt og årsavtale', valueStriketrough: '1500,-', value: '1395,-' },
];

const itemsCompactWithDescriptions = [
  { label: '6 GB', price: 399, value: '399,-', description: 'text below 399' },
  { label: '6 GB m/rabatt', price: 249, value: '249,-' },
  { label: '6 GB  m/rabatt', price: 249, value: '249,-', description: 'text below 399' },
  { isBold: true, label: 'Totalt pr.md. med familierabatt og årsavtale', valueStriketrough: '1500,-', value: '1395,-' },
];

export const Default = () => {
  return <SummaryTable items={items} />;
};

export const Compact = () => {
  return <SummaryTable kind="compact" items={itemsCompact} />;
};

export const CompactGrey = () => {
  return <SummaryTable kind="compact" items={itemsCompact} useGreyBackground={true} />;
};

export const CompactGreyNoIndentWithBadge = () => {
  return <SummaryTable kind="compact" items={itemsCompact} useGreyBackground={true} useIndent={false} badgeText="Ok" />;
};

export const CompactGreyWithAdditionalValues = () => {
  return <SummaryTable kind="compact" items={itemsCompactWithDescriptions} useGreyBackground={true} />;
};

export const CompactGreyWithAdditionalValuesNoIndent = () => {
  return (
    <SummaryTable kind="compact" items={itemsCompactWithDescriptions} useGreyBackground={true} useIndent={false} />
  );
};

export const NormalGreyWithDescriptionsWithIndent = () => {
  return <SummaryTable items={itemsWithDescriptions} useGreyBackground={true} useIndent={true} />;
};

export const NormalGreyWithDescriptionsWithIndentAndTitle = () => {
  return <SummaryTable items={itemsWithDescriptions} useGreyBackground={true} useIndent={true} title="Hello world" />;
};

export const NormalGreyWithDescriptionsWithIndentAndBadge = () => {
  return (
    <SummaryTable
      items={itemsWithDescriptions}
      useGreyBackground={true}
      useIndent={true}
      badgeStatus="ok"
      badgeText="Du sparer 2000,-"
    />
  );
};
