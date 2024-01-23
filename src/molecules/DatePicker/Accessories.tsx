import * as React from 'react';
import { Avatar, Icon } from '../../index';

export const Calendar = (props: { onClick: () => void }) => {
  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.onClick();
  };

  return <Avatar icon="calendar" onClick={onClick} size="compact" color="transparent" />;
};

export const Arrow = () => <Icon icon="arrow-right" style={{ height: '1.25rem', width: '1.25rem' }} />;
