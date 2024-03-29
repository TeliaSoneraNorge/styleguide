import React from 'react';
import _ from 'lodash';
import cn from 'classnames';

type ColorId = string;

export interface Color {
  id: ColorId;
  color: string;
  name: string;
}

export interface ColorPickerProps {
  selected?: Color;
  showSelected?: boolean;
  colors: Color[];
  size?: 's' | 'm' | 'l';
  onSelect?: (id: ColorId) => void;
}

const ColorPicker = ({
  selected,
  showSelected = true,
  colors = [],
  size = 'l',
  onSelect = () => undefined,
}: ColorPickerProps) => (
  <div
    className={cn('color-picker', {
      [`color-picker-size-${size}`]: true,
    })}
  >
    <div className="color-picker__colors">
      {colors.map((color) => (
        <button
          className={cn('color-picker__button', {
            'color-picker__selected': _.get(selected, 'id') === color.id,
          })}
          style={{ backgroundColor: color.color }}
          aria-label={color.name}
          key={color.id}
          onClick={() => onSelect(color.id)}
        />
      ))}
    </div>
    {!_.isEmpty(selected) && showSelected && <div className="color-picker__preview">{_.get(selected, 'name', '')}</div>}
  </div>
);

export default ColorPicker;
