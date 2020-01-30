import React, { useState } from 'react';
import FocusTrapWithForwardRef from './FocusTrap';

export default {
  title: 'Component library|Atoms/Focus Trap',
  component: FocusTrapWithForwardRef,
};

export const Default = () => (
  <>
    <p>FocusTrap is used in ModalDialog ++</p>
    <p>Example: {`{renderDialog(FocusTrap, { as: 'div' })}`}</p>
  </>
);