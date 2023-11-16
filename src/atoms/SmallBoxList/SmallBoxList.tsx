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
  type?: 'normal' | 'purple';
  onSelect?: (id: SmallBoxId) => void;
}

const SmallBoxList = ({ selected, boxes = [], type, onSelect = () => undefined }: SmallBoxListProps) => (
  <div className={cn('telia-small-box-list', { 'telia-small-box-list--purple': type === 'purple' })}>
    {boxes.map((box) => (
      <button
        className={cn('telia-small-box-list__button', {
          'telia-small-box-list__button--selected': selected === box.id,
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
