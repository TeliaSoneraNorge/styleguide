import React, { useState } from 'react';
import { PageFooter } from '../../index';

export default {
  title: 'Component library/Molecules/PageFooter',
  component: PageFooter,
};

export const DefaultPageFooter = () => {
  
  const links = [
    { text: 'Om Telia', url: '#' },
    { text: 'Telia butikker', url: '#' },
    { text: 'Presse', url: '#' },
    { text: 'Jobb i Telia', url: '#' },
  ];

  const specialLink = { text: 'Personvern og Cookies', url: '#' };

  return (
    <PageFooter links={links} specialLink={specialLink} />
  );
};