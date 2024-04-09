import React from 'react';
import cn from 'classnames';

type SmallBoxId = string;

export interface SmallBox {
  id: SmallBoxId;
  name: string;
  href?: string;
}

export interface SmallBoxListProps {
  selected?: SmallBoxId;
  boxes: SmallBox[];
  type?: 'normal' | 'purple';
  component?: 'button' | 'link';
  onSelect?: (id: SmallBoxId) => void;
}

const SmallBoxList = ({
  selected,
  boxes = [],
  type,
  onSelect = () => undefined,
  component = 'button',
}: SmallBoxListProps) => {
  const Tag: any = component === 'link' ? 'a' : component;
  return (
    <div className={cn('telia-small-box-list', { 'telia-small-box-list--purple': type === 'purple' })}>
      {boxes.map((box) => (
        <Tag
          href={box.href}
          className={cn('telia-small-box-list__button', {
            'telia-small-box-list__button--selected': selected === box.id,
          })}
          key={box.id}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            onSelect(box.id);
          }}
        >
          <span>{box.name}</span>
        </Tag>
      ))}
    </div>
  );
};

export default SmallBoxList;
