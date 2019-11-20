import * as React from 'react';

export interface DescriptionListProps {
  /**
   * Pairs of Dt or Dd.
   */
  children?: React.ReactNode;
  /**
   * Whenever should each column contain only two pairs.
   */
  wrapByTwo?: boolean;
}

const DescriptionList: React.FC<DescriptionListProps>;

export default DescriptionList;
