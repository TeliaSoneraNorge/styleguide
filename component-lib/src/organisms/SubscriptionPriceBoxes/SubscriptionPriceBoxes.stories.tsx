import React from 'react';
import { SubscriptionPriceBoxes, SubscriptionPriceBox } from './index';
import { Container } from '../../index';

export default {
  title: 'Component library/Organisms/SubscriptionPriceBoxes',
  component: SubscriptionPriceBoxes,
};

export const Default = () => (
  <Container size="large">
    <SubscriptionPriceBoxes>
      <SubscriptionPriceBox
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'size' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
        size="small"
        topText=""
        extraGB="+2GB"
        extraPrice="for 99,-"
        data="2GB"
        monthlyPrice="for 299,-/mnd"
        simIncluded={false}
      />
      <SubscriptionPriceBox
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'size' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
        size="medium"
        topText=""
        extraGB="+6GB"
        extraPrice="for 99,-"
        data="6GB"
        monthlyPrice="for 399,-/mnd"
        simIncluded={false}
      />
      <SubscriptionPriceBox
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'size' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
        size="large"
        topText="MEST SOLGT"
        extraGB="+50 GB"
        extraPrice="for 99,-"
        data="15GB"
        monthlyPrice="for 499,-/mnd"
        simIncluded={true}
        bottomText="Data-SIM inkl."
      />
      <SubscriptionPriceBox
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'size' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
        size="xlarge"
        topText=""
        extraGB="+50 GB"
        extraPrice="for 99,-"
        data="50GB"
        monthlyPrice="for 699,-/mnd"
        simIncluded={true}
        bottomText="Data-SIM inkl."
      />
    </SubscriptionPriceBoxes>
  </Container>
);
