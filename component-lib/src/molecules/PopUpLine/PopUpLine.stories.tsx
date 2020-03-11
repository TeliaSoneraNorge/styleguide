import React, { useState } from 'react';
import { PopUpLine } from '../../index';

export default {
  title: 'Component library|Molecules/PopUpLine',
  component: PopUpLine,
};

export const Default = () => (
  <PopUpLine
  description="Lagre endringer?"
  confirmButtonText="Lagre"
  cancelButtonText="Nei, forresten"
  isConfirmationLine
  />
  );
  
export const ConfirmationLine = () => <PopUpLine description="Endringene ble lagret!" />;