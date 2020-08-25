import React from 'react';
import FocusSubscription from './FocusSubscription';
import { colors } from '../../index';

export default {
  title: 'Component library/Organisms/FocusSubscription',
  component: FocusSubscription,
};

export const Default = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'id' does not exist on type 'IntrinsicAtt... Remove this comment to see the full error message
  <FocusSubscription id="smartMini" name="SMART Mini" dataAmount={1} dataUnit="GB" price={249} color={colors.red} />
);