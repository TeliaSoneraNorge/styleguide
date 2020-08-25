import React from 'react';
import { TextBoxWithCharCount } from '../../index';

export default {
  title: 'Component library/Molecules/TextBoxWithCharCount',
  component: TextBoxWithCharCount,
};

// @ts-expect-error ts-migrate(2322) FIXME: Property 'placeholder' does not exist on type 'Int... Remove this comment to see the full error message
export const Default = () => <TextBoxWithCharCount placeholder="Write some text..." maxCharCount={110} />;