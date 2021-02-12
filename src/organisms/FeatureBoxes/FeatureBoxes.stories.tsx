import React from 'react';
import { FeatureBoxes, FeatureBox, InfiniteIcon, WirelessIcon, MoneyIcon } from '../../index';

export default {
  title: 'Component library/Organisms/FeatureBoxes',
  component: FeatureBoxes,
};

export const Default = () => {
  return (
    <FeatureBoxes>
      <FeatureBox
        iconSvg={<InfiniteIcon />}
        size="medium"
        heading="Ubegrenset data"
        text="Slik at du kan surfe og strømme så mye du vil, uten å tenke på data."
      />
      <FeatureBox
        iconSvg={<WirelessIcon />}
        size="medium"
        heading="Dekningsgaranti"
        text="Med et mobilnett i verdensklasse får du garantert god dekning."
      />
      <FeatureBox
        iconSvg={<MoneyIcon />}
        size="medium"
        heading="Smart hvilemodus"
        text="Spar penger ved å redusere abonnementet i perioder du bruker lite data."
      />
    </FeatureBoxes>
  );
};

export const InheritBackground = () => {
  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <FeatureBoxes>
        <FeatureBox
          backgroundColor="transparent"
          iconSvg={<InfiniteIcon style={{ color: '990ae3' }} />}
          size="medium"
          heading="Ubegrenset data"
          text="Slik at du kan surfe og strømme så mye du vil, uten å tenke på data."
        />
        <FeatureBox
          backgroundColor="transparent"
          iconSvg={<WirelessIcon style={{ color: '990ae3' }} />}
          size="medium"
          heading="Dekningsgaranti"
          text="Med et mobilnett i verdensklasse får du garantert god dekning."
        />
        <FeatureBox
          backgroundColor="transparent"
          iconSvg={<MoneyIcon style={{ color: '990ae3' }} />}
          size="medium"
          heading="Smart hvilemodus"
          text="Spar penger ved å redusere abonnementet i perioder du bruker lite data."
        />
      </FeatureBoxes>
    </div>
  );
};

export const WithLinks = () => {
  return (
    <FeatureBoxes>
      <FeatureBox
        iconSvg={<InfiniteIcon style={{ color: '990ae3' }} />}
        size="medium"
        heading="Ubegrenset data"
        text="Slik at du kan surfe og strømme så mye du vil, uten å tenke på data."
        url="#"
      />
      <FeatureBox
        iconSvg={<WirelessIcon style={{ color: '990ae3' }} />}
        size="medium"
        heading="Dekningsgaranti"
        text="Med et mobilnett i verdensklasse får du garantert god dekning."
        url="#"
      />
      <FeatureBox
        iconSvg={<MoneyIcon style={{ color: '990ae3' }} />}
        size="medium"
        heading="Smart hvilemodus"
        text="Spar penger ved å redusere abonnementet i perioder du bruker lite data."
        url="#"
      />
    </FeatureBoxes>
  );
};
