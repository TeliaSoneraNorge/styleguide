import React from 'react';
import SummaryTable from './SummaryTable';

export default {
  title: 'Component library/Atoms/SummaryTable',
  component: SummaryTable,
};

const items = [
  {
    title: 'Betale pr md',
    isBold: true,
    label: 'Trådbløst bredbånd 100 og TV',
    price: 399,
    value: '399,-',
    description: '(49,-/md. etter 12 md.)',
    valueStriketrough: '9999,-',
  },
  { label: 'Trådbløst 100 bredbånd', price: 249, value: '249,-', description: '(49,-/md. etter 12 md.)' },
  {
    label: 'Trådbløst bredbånd 100 og TV',
    price: 249,
    value: '249,-',
    description: '(49,-/md. etter 12 md.)',
    valueStriketrough: '49,-/md.',
  },
  {
    title: 'In middle',
    label: 'Rabatt',
    value: `-XXX,-`,
    isBold: true,
    description: '(49,-/md. etter 12 md.)',
    isSucces: true,
    isStrikeThrough: true,
    valueStrikethrough: '999,-',
  },
  { isBold: true, isSuccess: true, label: 'Rabatt', value: `-XXX,-` },
  { isBold: true, isStriketrough: true, label: 'Ordinærpris', value: '1395,-', valueStriketrough: '9999,-' },
  { isBold: true, label: 'Din månedspris', value: '1395,-', valueStriketrough: '11111' },
];

export const Default = () => {
  return <SummaryTable items={items} />;
};

export const NormalGreyWithDescriptions = () => {
  return <SummaryTable items={items} background={'grey-50'} />;
};

export const NormalGreyWithDescriptionsWithIndentAndTitleAndBadge = () => {
  return <SummaryTable items={items} kind="normal" background={'grey-50'} badgeText="Du sparer 2000kr" />;
};

export const NormalGreyWithTitleAndDescriptionsWithNoIndentAndBadge = () => {
  return (
    <SummaryTable
      items={items}
      title="Oppsummering"
      background={'grey-50'}
      useIndent={false}
      badgeText="Du sparer 2000,-"
    />
  );
};

export const NormalGreyWithTitleAndResultLine = () => {
  return <SummaryTable items={items} background={'grey-50'} title="Oppsummering" onlyResultLine={true} />;
};

export const Compact = () => {
  return <SummaryTable kind="compact" items={items} />;
};

export const CompactGrey = () => {
  return <SummaryTable kind="compact" items={items} background={'grey-50'} />;
};

export const CompactGreyNoIndentWithBadge = () => {
  return (
    <SummaryTable kind="compact" items={items} background={'grey-50'} useIndent={false} badgeText="Du sparer 2000kr" />
  );
};

export const CompactGreyWithTitleAndAdditionalValues = () => {
  return <SummaryTable kind="compact" title="Oppsummering" items={items} />;
};

export const CompactGreyWithAdditionalValuesNoIndent = () => {
  return <SummaryTable kind="compact" title="Oppsummering" items={items} useIndent={false} background={'grey-50'} />;
};
