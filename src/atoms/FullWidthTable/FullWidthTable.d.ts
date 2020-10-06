import * as React from 'react';
import { UseThSortable } from './useThSortable';

declare type FullWidthTableProps = React.HTMLAttributes<HTMLTableElement> & {
  clickable?: boolean;
};

declare type ThSortableProps = React.HTMLAttributes<HTMLTableHeaderCellElement> & {
  onSort: () => void;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
};

declare type TFootProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  white?: boolean;
};

declare const FullWidthTable: React.FC<FullWidthTableProps> & {
  THead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>>;
  TBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>>;
  Th: React.FC<React.HTMLAttributes<HTMLTableHeaderCellElement>>;
  Tr: React.FC<React.HTMLAttributes<HTMLTableRowElement>>;
  Td: React.FC<React.HTMLAttributes<HTMLTableDataCellElement>>;

  ThSortable: React.FC<ThSortableProps>;

  TFoot: React.FC<TFootProps>;

  useThSortable: UseThSortable;
};

export default FullWidthTable;
