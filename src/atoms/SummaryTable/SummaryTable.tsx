import cn from 'classnames';
import React from 'react';
import _ from 'lodash';
import { Badge } from '../Badge';

export interface SummaryTableItem {
  title?: string;
  label: string;
  value: string;
  description?: string;
  valueStriketrough?: string;
  price?: number;
  isSuccess?: boolean;
  isStriketrough?: boolean;
  isBold?: boolean;
}

export interface SummaryTableProps {
  title?: string;
  items: SummaryTableItem[];
  kind?: 'normal' | 'compact';
  badgeText?: string;
  background?: null | 'grey-50';
  useIndent?: boolean;
  onlyResultLine?: boolean;
}

const SummaryTable = ({
  items,
  kind = 'normal',
  background = null,
  useIndent = kind == 'normal' ? false : true,
  badgeText = '',
  title = '',
  onlyResultLine = kind == 'normal' ? false : true,
}: SummaryTableProps) => (
  <dl
    className={cn('summary-table', {
      [`summary-table--${kind}`]: true,
      'summary-table--only-result-line': onlyResultLine,
      'summary-table--background-grey-50': background == 'grey-50',
    })}
  >
    {badgeText && (
      <div className="summary-table__badge-container">
        <Badge text={badgeText} color="#CCEFDD" textColor="#222" />
      </div>
    )}

    {title && <h3>{title}</h3>}

    {items.map((item, index) => (
      <>
        <div
          key={`${item.label}-${index}`}
          className={cn('summary-table__row', {
            'summary-table__row--bold': item.isBold,
            'summary-table__row--green': item.isSuccess,
            'summary-table__row--st': item.isStriketrough,
            'summary-table__row--indent': useIndent && index > 0 && index < _.size(items) - 1,
            'summary-table__row--first': index == 0 && !title,
          })}
        >
          {item.title && <h4>{item.title}</h4>}

          <div className="summary-table__row-container">
            <dt className="summary-table__label">{item.label}</dt>
            <dd className="summary-table__value">
              {item.valueStriketrough && (
                <span className="summary-table__value--striketrough">{item.valueStriketrough}</span>
              )}
              {item.value}
            </dd>
          </div>

          {item.description && (
            <div className="summary-table__row-description">
              <span className="summary-table__description">{item.description}</span>
            </div>
          )}
        </div>
      </>
    ))}
  </dl>
);

export default SummaryTable;
