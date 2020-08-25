import React from 'react';
import SvgIcon from './SvgIcon';

export default {
  title: 'Component library/Atoms/Svg Icon',
  component: SvgIcon,
};

export const Default = () => <SvgIcon iconName="ico_heart" />;

export const Color = () => <SvgIcon iconName="ico_heart" color="core-purple" />;

// @ts-expect-error ts-migrate(2322) FIXME: Property 'style' does not exist on type 'Intrinsic... Remove this comment to see the full error message
export const Background = () => <SvgIcon iconName="ico_heart" color="white" style={{ background: '#990AE3' }} />;

