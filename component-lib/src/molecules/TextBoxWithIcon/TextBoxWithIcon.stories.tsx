import React, { useState, useRef } from 'react';
import { TextBoxWithIcon } from '../../index';

export default {
  title: 'Component library/Molecules/TextBoxWithIcon',
  component: TextBoxWithIcon,
};

// @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
export const Default = () => <TextBoxWithIcon type="search" iconName="ico_search" iconLabel="Search" iconIsButton />;

// @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
export const TypeColoredIcon = () => <TextBoxWithIcon type="text" iconName="ico_check" iconColor="purple" />;

export const SmallTextBoxWithIcon = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
  <TextBoxWithIcon type="search" iconName="ico_search" iconLabel="Search" iconIsButton small />
);