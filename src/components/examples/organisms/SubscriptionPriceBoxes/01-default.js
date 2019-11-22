import React from 'react';
import { SubscriptionPriceBoxes, SubscriptionPriceBox, Container } from '@telia/styleguide';

const Default = () => (
  <Container size="large">
    <SubscriptionPriceBoxes>
      <SubscriptionPriceBox
        topText=""
        extraGB="+2GB"
        extraPrice="for 99,-"
        data="2GB"
        monthlyPrice="for 299,-/mnd"
        simIncluded={false}
      />
      <SubscriptionPriceBox
        topText=""
        extraGB="+6GB"
        extraPrice="for 99,-"
        data="6GB"
        monthlyPrice="for 399,-/mnd"
        simIncluded={false}
      />
      <SubscriptionPriceBox
        topText="MEST SOLGT"
        extraGB="+50 GB"
        extraPrice="for 99,-"
        data="15GB"
        monthlyPrice="for 499,-/mnd"
        simIncluded={true}
        bottomText="Data-SIM inkl."
      />
      <SubscriptionPriceBox
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

export default Default;
