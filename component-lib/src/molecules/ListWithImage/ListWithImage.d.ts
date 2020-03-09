import * as React from 'react';

export type ListWithImageImagePosition = 'top' | 'bottom';

export type ListWithImageListPosition = 'left' | 'right';

export interface ListWithImageProps {
  /**
   * ListWithImage.Item
   */
  children?: React.ReactNode;
  heading?: string;
  src: string;
  alt: string;
  /**
   * Position of the image on smaller devices.
   */
  imagePosition?: ListWithImageImagePosition;
  /**
   * Position of the list.
   */
  listPosition?: ListWithImageListPosition;
  /**
   * Hides the image on smaller screens.
   */
  hideImageForMobile?: boolean;
}

const ListWithImage: React.FC<ListWithImageProps> & {
  Item: React.FC;
};

export default ListWithImage;
