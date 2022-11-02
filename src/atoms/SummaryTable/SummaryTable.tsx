import cn from 'classnames';
import React from 'react';
import _ from 'lodash';
import { Badge } from '../Badge';

export interface SummaryTableItem {
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
  items: SummaryTableItem[];
  kind?: 'normal' | 'compact';
  title?: string;
  badgeText?: string;
  badgeStatus?: 'ok' | 'caution' | 'warning' | 'communication' | 'offer' | 'communication-light';
  useGreyBackground?: boolean;
  useIndent?: boolean;
}

const SummaryTable = ({
  items,
  kind = 'normal',
  title = '',
  useGreyBackground = false,
  useIndent = true,
  badgeText = '',
  badgeStatus = 'ok',
}: SummaryTableProps) => (
  <dl
    className={cn('summary-table', {
      [`summary-table--${kind}`]: true,
      'summary-table--background-grey': useGreyBackground,
    })}
  >
    {badgeText && (
      <div className="summary-table__badge-container">
        <Badge status={badgeStatus} text={badgeText} />
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
