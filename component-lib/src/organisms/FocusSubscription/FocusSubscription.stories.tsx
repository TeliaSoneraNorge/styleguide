import React from 'react';
import FocusSubscription from './FocusSubscription';
import { colors } from '../../index';

export default {
  title: 'Component library|Organisms/FocusSubscription',
  component: FocusSubscription,
};

export const Default = () => (
  <FocusSubscription id="smartMini" name="SMART Mini" dataAmount={1} dataUnit="GB" price={249} color={colors.red} />
);