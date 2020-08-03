import * as React from 'react';

export interface HeroSources {
  type?: 'mobile' | 'desktop';
  srcSet?: string;
}

export type HeroPebbles = 'easter' | 'black-friday' | 'variant-1' | 'variant-2' | 'variant-3' | 'variant-4';

export type HeroMode = 'mobile' | 'desktop';

export type HeroAlign = 'top' | 'bottom';

export type HeroAlignBox = 'left' | 'right' | 'center';

export interface HeroProps {
  heading: string;
  subheading: string;
  alt: string;
  logoSources?: any[];
  /**
   * Set of sources.
   */
  sources?: HeroSources[];
  /**
   * One of ['easter', 'black-friday', 'variant-1', 'variant-2', 'variant-3', 'variant-4']
   */
  pebbles?: HeroPebbles;
  /**
   * One of ['mobile', 'desktop']
   */
  mode?: HeroMode;
  /**
   * One of ['top', 'bottom']
   */
  align?: HeroAlign;
  /**
   * One of ['left', 'right' or 'center']
   */
  alignBox?: HeroAlignBox;
}

export const Hero: React.FC<HeroProps>;

export default Hero;
