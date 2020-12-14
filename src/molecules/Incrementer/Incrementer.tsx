import React from 'react';
import { Icon } from '../../atoms/Icon';
import cn from 'classnames';

type Props = {
  value: number;
  setValue: (num: number) => void;
  size?: 'compact' | 'default';
};

export const Incrementer = (props: Props) => {
  const decrement = () => props.setValue(props.value - 1);
  const increment = () => props.setValue(props.value + 1);

  return (
    <div className={cn('telia-incrementer')}>
      <button className="telia-incrementer--decrement" onClick={decrement}>
        <Icon icon="minus" />
      </button>
      <input
        className="telia-incrementer--value"
        type="number"
        value={props.value}
        onChange={(e) => props.setValue(parseInt(e.target.value))}
      />
      <button className="telia-incrementer--increment" onClick={increment}>
        <Icon icon="add" />
      </button>
    </div>
  );
};
