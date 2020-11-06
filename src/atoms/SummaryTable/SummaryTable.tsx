import cn from 'classnames';
import React from 'react';

export interface SummaryTableItem {
  label: string;
  value: string;
  price?: number;
  isSuccess?: boolean;
  isStriketrough?: boolean;
  isBold?: boolean;
}

export interface SummaryTableProps {
  items: SummaryTableItem[];
}

const SummaryTable = ({ items }: SummaryTableProps) => (
  <dl className="summary-table">
    {items.map((item, index) => (
      <div
        key={`${item.label}-${index}`}
        className={cn('summary-table__row', {
          'summary-table__row--bold': item.isBold,
          'summary-table__row--green': item.isSuccess,
          'summary-table__row--st': item.isStriketrough,
        })}
      >
        <dt className="summary-table__label">{item.label}</dt>
        <dd className="summary-table__value">{item.value}</dd>
      </div>
    ))}
  </dl>
);

export default SummaryTable;
