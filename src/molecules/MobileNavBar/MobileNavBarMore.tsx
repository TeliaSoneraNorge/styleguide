import React, { useState } from 'react';
import { IconDefinition } from '../..';
import { MobileNavBarItem } from './MobileNavBarItem';
import { Items, MobileNavBarMoreMenu } from './MobileNavBarMoreMenu';

interface Props {
  label?: string;
  icon?: IconDefinition;
  items: Items;
}
export const MobileNavBarMore = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileNavBarItem label={props.label} icon={props.icon || 'more'} onClick={() => setOpen(!open)} active={open} />
      <MobileNavBarMoreMenu open={open} close={() => setOpen(false)} items={props.items} />
    </>
  );
};
