import React from 'react';
import SummaryTable from './SummaryTable';

export default {
  title: 'Component library/Atoms/SummaryTable',
  component: SummaryTable,
};

const items = [
  {
    title: '1Betale pr md',
    isBold: true,
    label: '1 Trådbløst bredbånd 100 og TV',
    price: 399,
    value: '399,-',
    description: '(49,-/md. etter 12 md.)',
    valueStriketrough: '9999,-',
  },
  { label: '2 Trådbløst 100 bredbånd', price: 249, value: '249,-', description: '(49,-/md. etter 12 md.)' },
  {
    label: '3 Trådbløst bredbånd 100 og TV',
    price: 249,
    value: '249,-',
    description: '(49,-/md. etter 12 md.)',
    valueStriketrough: '49,-/md.',
  },
  {
    title: 'In middle',
    label: '4 Rabatt',
    value: `-XXX,-`,
    isBold: true,
    description: '(49,-/md. etter 12 md.)',
    isSucces: true,
    isStrikeThrough: true,
    valueStrikethrough: '999,-',
  },
  {
    isBold: true,
    isStriketrough: true,
    label: '5 Ordinærpris',
    value: '1395,-',
    valueStriketrough: '9999,-',
    title: 'Engangssum',
    isBelowLine: true,
  },
  { isBold: true, isSuccess: true, label: '6 Rabatt', value: `-XXX,-` },
  { isBold: true, label: '7 in månedspris', value: '1395,-', valueStriketrough: '11111', isBelowLine: true },
  { isBold: true, label: '8 in månedspris', value: '445,-', valueStriketrough: '2232', isBelowLine: true },
  { isBold: true, label: '9 in is', value: '2395,-', valueStriketrough: '414', isBelowLine: true },
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
  return <SummaryTable items={items} background={'grey-50'} title="Oppsummering" resultLine={true} />;
};

export const NormalGreyWithTitleAndNoResultLine = () => {
  return <SummaryTable items={items} background={'grey-50'} title="Oppsummering" resultLine={false} />;
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

export const CompactGreyWithAdditionalValuesNoIndentNoResultLine = () => {
  return (
    <SummaryTable
      kind="compact"
      title="Oppsummering"
      items={items}
      useIndent={false}
      background={'grey-50'}
      resultLine={false}
    />
  );
};
