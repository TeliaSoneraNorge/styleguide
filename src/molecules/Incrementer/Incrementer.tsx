import React from 'react';
import { Icon } from '../../atoms/Icon';
import cn from 'classnames';

type Props = {
  value: number;
  setValue: (num?: number) => void;
  size?: 'compact' | 'default';
  max?: number;
  min?: number;
  /**
   * For the input field
   */
  name?: string;
};

export const Incrementer = (props: Props) => {
  const decrement = () => {
    const newVal = (props.value ?? 0) - 1;
    props.setValue(props.min !== undefined ? Math.max(props.min, newVal) : newVal);
  };

  const increment = () => {
    const newVal = (props.value ?? 0) + 1;
    props.setValue(props.max !== undefined ? Math.min(props.max, newVal) : newVal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checkValidity()) {
      props.setValue(e.target.value ? parseInt(e.target.value) : undefined);
    }
  };

  return (
    <div className={cn('telia-incrementer', { 'telia-incrementer__compact': props.size === 'compact' })}>
      <button
        className="telia-incrementer--decrement"
        onClick={decrement}
        disabled={Boolean(props.min !== undefined && props.value <= props.min)}
      >
        <Icon icon="minus" />
      </button>
      <input
        className="telia-incrementer--value"
        type="number"
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={handleChange}
      />
      <button
        className="telia-incrementer--increment"
        onClick={increment}
        disabled={Boolean(props.max && props.value >= props.max)}
      >
        <Icon icon="add" />
      </button>
    </div>
  );
};
