import React, { useState } from 'react';
import { ServiceCard, ServiceCardProps } from './ServiceCard';

export default {
  title: 'Component library/Molecules/ServiceCard',
  component: ServiceCard,
};

const data: Omit<ServiceCardProps, 'onAdd' | 'checked'>[] = [
  {
    icon: 'security',
    price: '109',
    heading: 'Telia trygg',
    description: 'Sikkerhet på nett',
    strikethrough: '0',
  },
  {
    icon: 'cloud',
    price: '109',
    heading: 'Telia Sky',
    description: 'Ubegrenset skylagring',
    strikethrough: '0',
  },
  {
    icon: 'sim-card',
    price: '89',
    heading: 'SIM-kort',
    description: 'Ekstra SIM-kort',
    strikethrough: '0',
  },
  {
    price: '89',
    heading: 'SIM-kort',
    description: 'Ekstra SIM-kort',
  },
];

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return <ServiceCard checked={checked} onAdd={() => setChecked(!checked)} {...data[0]} />;
};

export const List = () => {
  return data.map((service, index) => {
    return <ServiceCard checked={false} onAdd={(item) => console.log(item)} key={index} {...service} />;
  });
};
