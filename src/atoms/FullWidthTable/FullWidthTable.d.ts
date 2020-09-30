import * as React from 'react';
import { UseThSortable } from './useThSortable';

declare type CommonProps = React.HTMLAttributes<HTMLElement>;

declare type FullWidthTableProps = CommonProps & {
  clickable?: boolean;
};

declare type ThSortableProps = CommonProps & {
  onSort: () => void;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
};

declare type TFootProps = CommonProps & {
  white?: boolean;
};

declare const FullWidthTable: React.FC<FullWidthTableProps> & {
  THead: React.FC<CommonProps>;
  TBody: React.FC<CommonProps>;
  Th: React.FC<CommonProps>;
  Tr: React.FC<CommonProps>;
  Td: React.FC<CommonProps>;

  ThSortable: React.FC<ThSortableProps>;

  TFoot: React.FC<TFootProps>;

  useThSortable: UseThSortable;
};

export default FullWidthTable;
