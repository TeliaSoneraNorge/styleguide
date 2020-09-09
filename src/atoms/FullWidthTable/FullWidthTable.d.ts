import * as React from 'react';

declare type FullWidthTableProps = {
  clickable?: boolean;
};

declare type TrProps = {
  onClick: () => void;
};

declare type ThSortableProps = {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
};

declare type TFootProps = {
  white?: boolean;
};

declare const FullWidthTable: React.FC<React.ReactNode | FullWidthTableProps> & {
  THead: React.FC<React.ReactNode>;
  TBody: React.FC<React.ReactNode>;
  Th: React.FC<React.ReactNode>;
  Tr: React.FC<React.ReactNode | TrProps>;
  Td: React.FC<React.ReactNode>;

  ThSortable: React.FC<React.ReactNode | ThSortableProps>;

  TFoot: React.FC<React.ReactNode | TFootProps>;
};

export default FullWidthTable;
