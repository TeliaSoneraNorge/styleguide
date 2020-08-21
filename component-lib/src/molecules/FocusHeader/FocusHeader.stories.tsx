import React from 'react';
import { FocusHeader, Button } from '../../index';

export default {
  title: 'Component library/Molecules/FocusHeader',
  component: FocusHeader,
};

export const Default = () => (
  <FocusHeader title="Mistet telefonen?">
    <Button text="Sperr abonnement" margin="bottom" />
  </FocusHeader>
);
