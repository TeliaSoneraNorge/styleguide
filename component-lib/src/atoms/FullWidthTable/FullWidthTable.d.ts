import * as React from 'react';

export type FullWidthTableProps = {
  clickable?: boolean;
}

export type TrProps = {
  onClick: () => void
}

export type ThSortableProps = {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
}

export type TFootProps = {
  white?: boolean;
}

export const FullWidthTable: React.FC<React.ReactNode | FullWidthTableProps> & {
  THead: React.FC<React.ReactNode>
  TBody: React.FC<React.ReactNode>
  Th: React.FC<React.ReactNode>
  Tr: React.FC<React.ReactNode | TrProps>
  Td: React.FC<React.ReactNode>
  
  ThSortable: React.FC<React.ReactNode | ThSortableProps>

  TFoot: React.FC<React.ReactNode | TFootProps>
};

export default FullWidthTable;
