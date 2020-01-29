import * as React from 'react';

export interface UniqueSellingPointsProps {
  /**
   * Zero or more of UniqueSellingPoints.Item elements.
   */
  children?: React.ReactNode;
  /**
   * For Vertical Listing
   */
  className?: string;
}

export interface ItemProps {
  iconName: string;
  iconColor?: string;
}

const UniqueSellingPoints: React.FC<UniqueSellingPointsProps> & {
      Item: React.FC<ItemProps>;
};

export default UniqueSellingPoints;
