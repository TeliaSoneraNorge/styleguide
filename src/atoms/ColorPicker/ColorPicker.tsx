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
    colors: Color[];
    onSelect?: (id: ColorId) => void;
}

const ColorPicker = ({ selected, colors = [], onSelect = () => undefined } : ColorPickerProps) => (
  <div className="color-picker">
    <div className="color-picker__colors">
      {colors.map(color => (
        <button
          className={cn('color-picker__button', {
            'color-picker__selected': _.get(selected, "id") === color.id,
          })}
          style={{ backgroundColor: color.color }}
          aria-label={color.name}
          key={color.id}
          onClick={() => onSelect(color.id)}
        />
      ))}
    </div>
    {!_.isEmpty(selected) && <div className="color-picker__preview">{_.get(selected, "name", "")}</div>}
  </div>
);

export default ColorPicker;
