import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';

const SmallBoxList = ({ selected, boxes = [], onSelect }) => (
  <div className="small-box-list">
    {boxes.map(box => (
      <button
        className={cn('small-box-list__button', {
          'small-box-list__button--selected': _.get(selected, 'id') === box.id,
        })}
        key={box.id}
        onClick={() => onSelect(box)}
      >
        {box.name}
      </button>
    ))}
  </div>
);

const SmallBoxPropType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});

SmallBoxList.propTypes = {
  selected: SmallBoxPropType,
  boxes: PropTypes.arrayOf(SmallBoxPropType),
  onSelect: PropTypes.func,
};

export default SmallBoxList;
