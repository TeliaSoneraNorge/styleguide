import React from 'react';
import cn from 'classnames';
import { CardOptionProps } from './CardOption';
import { useBreakpoint } from '../../utils/useBreakpoint';

interface Props {
  columns?: 1 | 2;
}
export const CardOptions: React.FC<Props> = (props) => {
  const count = React.Children.count(props.children);
  const breakpointSm = useBreakpoint('sm');
  const oneCol = !breakpointSm || props.columns === 1;

  const spanCol = (index: number) =>
    (props.columns === 1 && count === 1) || (count % 2 !== 0 && count === index + 1)
      ? 'telia-card__option--spanCol'
      : '';

  return (
    <div className={cn('telia-card__options', { 'telia-card__options--oneCol': oneCol })}>
      {React.Children.toArray(props.children).map((child, i) =>
        React.isValidElement<CardOptionProps>(child)
          ? React.cloneElement(child, {
              ...child.props,
              className: (child.props.className ?? '') + spanCol(i),
            })
          : null
      )}
    </div>
  );
};
