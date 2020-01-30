import * as React from 'react';

type FullWidthTableProps = {
  clickable?: boolean;
}

type TrProps = {
  onClick: () => void
}

type ThSortableProps = {
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
}

type TFootProps = {
  white?: boolean;
}

const FullWidthTable: React.FC<React.ReactNode | FullWidthTableProps> & {
  THead: React.FC<React.ReactNode>
  TBody: React.FC<React.ReactNode>
  Th: React.FC<React.ReactNode>
  Tr: React.FC<React.ReactNode | TrProps>
  Td: React.FC<React.ReactNode>
  
  ThSortable: React.FC<React.ReactNode | ThSortableProps>

  TFoot: React.FC<React.ReactNode | TFootProps>
};

export default FullWidthTable;
