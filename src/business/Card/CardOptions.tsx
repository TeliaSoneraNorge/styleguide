import React from 'react';
import cn from 'classnames';
import { CardOptionProps } from './CardOption';

interface Props {
  columns?: 1 | 2;
}
export const CardOptions: React.FC<Props> = (props) => {
  const count = React.Children.count(props.children);

  const getBorders = (index: number) => {
    let borders = '';
    if ((props.columns === 1 && count === 1) || (count % 2 !== 0 && count === index + 1))
      borders += ' telia-card__option--spanCol';

    if (props.columns !== 1) {
      if ((index + 1) % 2 === 0) borders += ' telia-card__option--borderLeft';
      if (index > 1) borders += ' telia-card__option--borderTop';
    } else {
      if (index > 0) borders += ' telia-card__option--borderTop';
    }
    return borders;
  };

  return (
    <div className={cn('telia-card__options', { 'telia-card__options--oneCol': props.columns === 1 })}>
      {React.Children.toArray(props.children).map((child, i) =>
        React.isValidElement<CardOptionProps>(child)
          ? React.cloneElement(child, {
              ...child.props,
              className: (child.props.className ?? '') + getBorders(i),
            })
          : null
      )}
    </div>
  );
};
