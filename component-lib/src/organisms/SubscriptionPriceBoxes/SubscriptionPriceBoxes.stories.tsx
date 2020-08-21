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
        size="small"
        topText=""
        extraGB="+2GB"
        extraPrice="for 99,-"
        data="2GB"
        monthlyPrice="for 299,-/mnd"
        simIncluded={false}
      />
      <SubscriptionPriceBox
        size="medium"
        topText=""
        extraGB="+6GB"
        extraPrice="for 99,-"
        data="6GB"
        monthlyPrice="for 399,-/mnd"
        simIncluded={false}
      />
      <SubscriptionPriceBox
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
