import React from 'react';
import { TextBoxWithCharCount } from '../../index';

export default {
  title: 'Component library/Molecules/TextBoxWithCharCount',
  component: TextBoxWithCharCount,
};

export const Default = () => <TextBoxWithCharCount placeholder="Write some text..." maxCharCount={110} />;