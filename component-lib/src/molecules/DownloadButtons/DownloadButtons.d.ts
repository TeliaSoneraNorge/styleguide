import * as React from 'react';

export interface DownloadButtonsProps {
  /**
   * One or more of DownloadButtons.Button.
   */
  children?: React.ReactNode;
}

export interface ButtonProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  'aria-label': string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> & {
  Button: React.FC<ButtonProps>
};

export default DownloadButtons;
