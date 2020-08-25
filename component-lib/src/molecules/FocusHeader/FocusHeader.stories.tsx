import React from 'react';
import { FocusHeader, Button } from '../../index';

export default {
  title: 'Component library/Molecules/FocusHeader',
  component: FocusHeader,
};

export const Default = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <FocusHeader title="Mistet telefonen?">
    <Button text="Sperr abonnement" margin="bottom" />
  </FocusHeader>
);
