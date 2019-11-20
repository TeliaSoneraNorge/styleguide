import * as React from 'react';

export interface CampaignProps {
  headingText: React.ReactNode;
  ingressHtml?: React.ReactNode;
  buttonText: React.ReactNode;
  desktopBackgroundImage: string;
  mobileBackgroundImage: string;
  backgroundImageAltText?: string;
  isUsingWhiteText?: boolean;
  isUsingWhiteContentBox?: boolean;
  children?: React.ReactNode;
}

const Campaign: React.FC<CampaignProps>;

export default Campaign;
