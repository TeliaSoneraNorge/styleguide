import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';

const ColorPicker = ({ selected, colors = [], onSelect }) => (
  <div className="color-picker">
    <div className="color-picker__colors">
      {colors.map(color => (
        <button
          className={cn('color-picker__button', {
            'color-picker__selected': _.get(selected, 'id') === color.id,
          })}
          style={{ backgroundColor: color.color }}
          aria-label={color.name}
          key={color.id}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
    {!_.isEmpty(selected) && <div className="color-picker__preview">{selected.name}</div>}
  </div>
);

const ColorPropType = PropTypes.shape({
  id: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
});

ColorPicker.propTypes = {
  selected: ColorPropType,
  colors: PropTypes.arrayOf(ColorPropType),
  onSelect: PropTypes.func,
};

export default ColorPicker;
