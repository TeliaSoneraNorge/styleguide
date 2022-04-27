import cn from 'classnames';
import React from 'react';
import _ from 'lodash';

export interface SummaryTableItem {
  label: string;
  value: string;
  valueStriketrough?: string;
  price?: number;
  isSuccess?: boolean;
  isStriketrough?: boolean;
  isBold?: boolean;
}

export interface SummaryTableProps {
  items: SummaryTableItem[];
  kind?: 'normal' | 'compact';
}

const SummaryTable = ({ items, kind = 'normal' }: SummaryTableProps) => (
  <dl className={cn('summary-table', { [`summary-table--${kind}`]: true })}>
    {items.map((item, index) => (
      <div
        key={`${item.label}-${index}`}
        className={cn('summary-table__row', {
          'summary-table__row--bold': item.isBold,
          'summary-table__row--green': item.isSuccess,
          'summary-table__row--st': item.isStriketrough,
          'summary-table__row--indent': index > 0 && index < _.size(items) - 1,
        })}
      >
        <dt className="summary-table__label">{item.label}</dt>
        <dd className="summary-table__value">
          {item.valueStriketrough && (
            <span className="summary-table__value--striketrough">{item.valueStriketrough}</span>
          )}
          {item.value}
        </dd>
      </div>
    ))}
  </dl>
);

export default SummaryTable;
