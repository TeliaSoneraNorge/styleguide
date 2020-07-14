import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';

const SizePicker = ({ selected, sizes = [], onSelect }) => (
  <div className="size-picker">
    {sizes.map(size => (
      <button
        className={cn('size-picker__button', {
          'size-picker__button--selected': _.get(selected, 'id') === size.id,
        })}
        key={size.id}
        onClick={() => onSelect(size)}
      >
        {size.name}
      </button>
    ))}
  </div>
);

const SizePropType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});

SizePicker.propTypes = {
  selected: SizePropType,
  sizes: PropTypes.arrayOf(SizePropType),
  onSelect: PropTypes.func,
};

export default SizePicker;
