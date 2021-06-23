import React, { useState } from 'react';
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

const SmallBoxList = ({ selected, boxes = [], onSelect = () => undefined }: SmallBoxListProps) => {
  const maxItems = boxes.length >= 6;
  const [menuOpen, setMenuOpen] = useState(false);

  const MaxItemsToShow = () => {
    return (
      <div className="small-box-list__box-wrapper">
        {boxes.slice(0, 6).map((box) => (
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
  };

  const MenuItems = () => {
    return (
      <div className="menu-wrapper">
        <button className="small-box-list__button" onClick={() => setMenuOpen(!menuOpen)}>
          ...
        </button>
        <div
          className={cn('small-box-list__menu', {
            'small-box-list__menu--open': menuOpen === true,
          })}
        >
          {boxes.slice(6, boxes.length).map((box) => {
            return menuOpen ? (
              <button
                className={cn('small-box-list__button', {
                  'small-box-list__button--selected': selected === box.id,
                })}
                key={box.id}
                onClick={() => onSelect(box.id)}
              >
                {box.name}
              </button>
            ) : null;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="small-box-list">
      {maxItems && (
        <>
          {MaxItemsToShow()}
          {MenuItems()}
        </>
      )}
      {!maxItems &&
        boxes.map((box) => (
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
};

export default SmallBoxList;
