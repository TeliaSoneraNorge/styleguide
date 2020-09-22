import * as React from 'react';
import { UseThSortable } from './useThSortable';
import { MouseEventHandler } from 'react';

declare type CommonProps = {
  className?: string;
};

declare type FullWidthTableProps = CommonProps & {
  clickable?: boolean;
};

declare type TrProps = CommonProps & {
  onClick?: MouseEventHandler;
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
  Tr: React.FC<TrProps>;
  Td: React.FC<CommonProps>;

  ThSortable: React.FC<ThSortableProps>;

  TFoot: React.FC<TFootProps>;

  useThSortable: UseThSortable;
};

export default FullWidthTable;
