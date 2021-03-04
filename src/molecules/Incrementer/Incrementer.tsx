import React from 'react';
import { Icon } from '../../atoms/Icon';
import cn from 'classnames';
import { Button } from '../../business';

type Props = {
  value: number;
  setValue: (num?: number) => void;
  size?: 'compact' | 'default';
  kind?: 'primary' | 'secondary';
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
    <div
      className={cn('telia-incrementer', {
        'telia-incrementer__compact': props.size === 'compact',
      })}
    >
      <Button
        className="telia-incrementer--decrement"
        icon="minus"
        kind={props.kind === 'secondary' ? 'secondary-text' : 'primary-text'}
        onClick={decrement}
        disabled={Boolean(props.min !== undefined && props.value <= props.min)}
        size={props.size === 'compact' ? 'compact' : 'default'}
      />
      <input
        className="telia-incrementer--value"
        type="number"
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={handleChange}
      />
      <Button
        className="telia-incrementer--increment"
        icon="add"
        kind={props.kind === 'secondary' ? 'secondary-text' : 'primary-text'}
        onClick={increment}
        disabled={Boolean(props.max && props.value >= props.max)}
      />
    </div>
  );
};
