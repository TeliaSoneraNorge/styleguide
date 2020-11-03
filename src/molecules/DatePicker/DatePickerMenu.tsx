import React, { useState } from 'react';
import { TextField } from '../../business/TextField';
import { useFocusTrap } from '../Modal/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DatePickerMenu = (props: Props) => {
  const { container } = useFocusTrap();
  useEscapeListener({ onEscape: () => props.setOpen(false) });

  const days = new Date(2020, 2, 0).getDate();

  if (!props.open) return null;

  return (
    <div ref={container} className="telia-date-picker--menu">
      Calendar <button onClick={() => console.log('heii')}>hei</button>
      <button>hei 2</button>
      {days}
    </div>
  );
};
