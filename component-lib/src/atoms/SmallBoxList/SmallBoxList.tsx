import React from 'react';
import cn from 'classnames';

type SmallBoxId = string;

export interface SmallBox {
  id: SmallBoxId;
  name: string;
}

export interface SmallBoxListProps {
  selected?: SmallBoxId;
  boxes: SmallBox[];
  onSelect?: (id: SmallBoxId) => void;
}

const SmallBoxList = ({ selected, boxes = [], onSelect = () => undefined }: SmallBoxListProps) => (
  <div className="small-box-list">
    {boxes.map(box => (
      <button
        className={cn('small-box-list__button', {
          'small-box-list__button--selected': selected === box.id,
        })}
        key={box.id}
        onClick={() => onSelect(box.id)}
      >
        {box.name}
      </button>
    ))}
  </div>
);

export default SmallBoxList;
