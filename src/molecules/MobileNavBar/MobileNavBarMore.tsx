import React, { useState } from 'react';
import { MobileNavBarItem, MobileNavBarItemProps } from './MobileNavBarItem';
import { MobileNavBarMoreMenu } from './MobileNavBarMoreMenu';

interface Props {
  label?: string;
  items: Array<MobileNavBarItemProps | { divider: true }>;
}
export const MobileNavBarMore = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileNavBarItem label={props.label} icon="more" onClick={() => setOpen(!open)} active={open} />
      <MobileNavBarMoreMenu open={open} close={() => setOpen(false)} items={props.items} />
    </>
  );
};
