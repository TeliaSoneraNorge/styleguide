import cn from 'classnames';
import React from 'react';
import _ from 'lodash';
import { Badge } from '../Badge';
import { Icon } from '../../atoms/Icon';

export interface SummaryTableItem {
  title?: string;
  label?: string;
  value?: string;
  description?: string;
  valueStriketrough?: string;
  isSuccess?: boolean;
  isStriketrough?: boolean;
  isBelowLine?: boolean;
  isBold?: boolean;
}

export interface SummaryTableProps {
  title?: string;
  items: SummaryTableItem[];
  kind?: 'normal' | 'compact';
  badgeText?: string;
  badgeIcon?: any;
  background?: 'grey-50';
  useIndent?: boolean;
  useResultLine?: boolean;
}

function sort(list: SummaryTableItem[]) {
  return list.sort(function (x, y) {
    if (!!x?.isBelowLine === true && !!y?.isBelowLine === false) {
      return 1;
    }
    if (!!x?.isBelowLine === false && !!y?.isBelowLine === true) {
      return -1;
    }
    return 0;
  });
}

const SummaryTable = ({
  items,
  kind = 'normal',
  background = undefined,
  useIndent = kind === 'compact',
  badgeText = '',
  badgeIcon = '',
  useResultLine = kind === 'compact',
  title = '',
}: SummaryTableProps) => (
  <dl
    className={cn('summary-table', {
      [`summary-table--${kind}`]: true,
      'summary-table--result-line': useResultLine === true && items.filter((x) => x.isBelowLine).length == 0,
      'summary-table--background-grey-50': background === 'grey-50',
    })}
  >
    {badgeText && (
      <div className="summary-table__badge-container">
        {badgeIcon && (
          <Badge text={badgeText} color="#CCEFDD" textColor="#222" className="telia-badge--with-icon">
            <Icon icon={badgeIcon} />
          </Badge>
        )}

        {!badgeIcon && (
          <Badge text={badgeText} color="#CCEFDD" textColor="#222">
            <Icon icon={null as any} />
          </Badge>
        )}
      </div>
    )}

    {title && <h3>{title}</h3>}

    {sort(items).map((item, index) => (
      <div
        key={`summary-table-data-${title}${item.label}${item.value}-${index}`}
        className={cn('summary-table__row', {
          'summary-table__row--bold': item.isBold,
          'summary-table__row--green': item.isSuccess,
          'summary-table__row--st': item.isStriketrough,
          'summary-table__row--below-line': item.isBelowLine,
          'summary-table__row--indent': useIndent && index > 0 && index < _.size(items) - 1,
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
    ))}
  </dl>
);

export default SummaryTable;
