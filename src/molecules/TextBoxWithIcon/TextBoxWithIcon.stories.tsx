import React, { useState, useRef } from 'react';
import { TextBoxWithIcon } from '../../index';

export default {
  title: 'Component library/Molecules/TextBoxWithIcon',
  component: TextBoxWithIcon,
};

export const Default = () => <TextBoxWithIcon type="search" iconName="ico_search" iconLabel="Search" iconIsButton />;

export const TypeColoredIcon = () => <TextBoxWithIcon type="text" iconName="ico_check" iconColor="purple" />;

export const SmallTextBoxWithIcon = () => (
  <TextBoxWithIcon type="search" iconName="ico_search" iconLabel="Search" iconIsButton small />
);